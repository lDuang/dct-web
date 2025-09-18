<template>
    <section class="honor-wall-section" id="honor-wall">
        <div class="background-blur"></div>
        <div class="container">
            <div class="section-header">
                <h2>荣誉墙</h2>
                <p>我们团队的成就与荣誉</p>
            </div>
            <div class="image-grid-container">
                <div class="image-grid" id="imageGrid">
                    <!-- 图片将由JavaScript动态加载到这里 -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const originalImageLinks = [
    'https://cloud.duapp.dev/f/5Lfq/IMG_1365.jpeg',
    'https://cloud.duapp.dev/f/JrhY/IMG_1368.jpeg',
    'https://cloud.duapp.dev/f/PMUN/IMG_0736.jpeg',
    'https://cloud.duapp.dev/f/3QCb/IMG_1367.jpeg',
    'https://cloud.duapp.dev/f/oWBiY/IMG_1349.jpeg',
    'https://cloud.duapp.dev/f/GgFM/IMG_1366.jpeg',
    'https://cloud.duapp.dev/f/9GsR/IMG_1364.jpeg',
    'https://cloud.duapp.dev/f/bvto/IMG_1363.jpeg',
    'https://cloud.duapp.dev/f/BnSn/IMG_1362.jpeg',
    'https://cloud.duapp.dev/f/L2HY/IMG_1361.jpeg',
    'https://cloud.duapp.dev/f/ZWTY/IMG_1359.jpeg',
    'https://cloud.duapp.dev/f/g5iA/IMG_1358.jpeg',
    'https://cloud.duapp.dev/f/lGI0/IMG_1355.jpeg',
    'https://cloud.duapp.dev/f/XOcO/IMG_1356.jpeg',
    'https://cloud.duapp.dev/f/V0f2/IMG_1357.jpeg',
    'https://cloud.duapp.dev/f/N6h9/IMG_1354.jpeg',
    'https://cloud.duapp.dev/f/8XUg/IMG_1353.jpeg',
    'https://cloud.duapp.dev/f/WYFk/IMG_1352.jpeg',
    'https://cloud.duapp.dev/f/DRsP/IMG_1304.jpeg',
    'https://cloud.duapp.dev/f/nvXHY/IMG_1350.jpeg',
    'https://cloud.duapp.dev/f/azlTy/IMG_1360.jpeg',
    'https://cloud.duapp.dev/f/YlYIM/IMG_1351.jpeg'
];

let scrollAnimationId = null;
let currentScrollX = ref(0);
let lastTimestamp = 0;
let lazyLoadObserver = null;

const imageGrid = ref(null);
const imageGridContainer = ref(null);

let cachedImageWrapperWidth = 0;
let cachedImageWrapperHeight = 0;
let cachedGridGap = 0;
let cachedNumRows = 0;
let cachedWidthOfOneSet = 0;
let cachedResetScrollPoint = 0;

const appendImages = (links) => {
    links.forEach(link => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('image-wrapper');
        const img = document.createElement('img');
        img.dataset.src = link;
        img.alt = '荣誉图片';
        wrapper.appendChild(img);
        imageGrid.value.appendChild(wrapper);
        lazyLoadObserver.observe(wrapper);
    });
};

const animateScroll = (timestamp) => {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    const pixelsPerSecond = 30;
    const pixelsToMove = (pixelsPerSecond * deltaTime) / 1000;

    currentScrollX.value -= pixelsToMove;

    if (currentScrollX.value < cachedResetScrollPoint) {
        currentScrollX.value += cachedWidthOfOneSet;
    }

    imageGrid.value.style.transform = `translateX(${currentScrollX.value}px)`;
    scrollAnimationId = requestAnimationFrame(animateScroll);
};

onMounted(() => {
    imageGrid.value = document.getElementById('imageGrid');
    imageGridContainer.value = document.querySelector('.image-grid-container');

    lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                if (img && img.dataset.src && !img.src) {
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.classList.add('loaded');
                        observer.unobserve(entry.target);
                    };
                    img.onerror = () => {
                        console.error('Image failed to load:', img.dataset.src);
                        img.classList.add('loaded');
                        img.style.opacity = 0.5;
                        observer.unobserve(entry.target);
                    };
                }
            }
        });
    }, {
        root: imageGridContainer.value,
        rootMargin: '0px 300px 0px 300px',
        threshold: 0
    });

    appendImages(originalImageLinks);
    appendImages(originalImageLinks);

    const sectionElement = imageGrid.value.closest('.honor-wall-section');
    const rootStyles = getComputedStyle(sectionElement);

    cachedImageWrapperWidth = parseFloat(rootStyles.getPropertyValue('--img-width'));
    cachedImageWrapperHeight = parseFloat(rootStyles.getPropertyValue('--img-height'));
    cachedGridGap = parseFloat(rootStyles.getPropertyValue('--grid-gap'));
    cachedNumRows = parseFloat(rootStyles.getPropertyValue('--num-rows'));

    const totalImagesInOneSet = originalImageLinks.length;
    const totalColumnsInOneSet = Math.ceil(totalImagesInOneSet / cachedNumRows);
    cachedWidthOfOneSet = totalColumnsInOneSet * cachedImageWrapperWidth + (totalColumnsInOneSet > 0 ? (totalColumnsInOneSet - 1) * cachedGridGap : 0);
    cachedResetScrollPoint = -cachedWidthOfOneSet;

    imageGrid.value.style.height = `${cachedNumRows * cachedImageWrapperHeight + (cachedNumRows - 1) * cachedGridGap}px`;

    animateScroll(0);

    imageGridContainer.value.addEventListener('mouseenter', () => {
        if (scrollAnimationId !== null) {
            cancelAnimationFrame(scrollAnimationId);
            scrollAnimationId = null;
        }
    });

    imageGridContainer.value.addEventListener('mouseleave', () => {
        if (scrollAnimationId === null) {
            lastTimestamp = 0;
            animateScroll(0);
        }
    });

    imageGrid.value.addEventListener('mouseenter', (event) => {
        const targetWrapper = event.target.closest('.image-wrapper');
        if (targetWrapper) {
            targetWrapper.classList.add('is-hovered');
            Array.from(imageGrid.value.children).forEach(otherWrapper => {
                if (otherWrapper !== targetWrapper) {
                    otherWrapper.style.pointerEvents = 'none';
                }
            });
        }
    }, true);

    imageGrid.value.addEventListener('mouseleave', (event) => {
        const targetWrapper = event.target.closest('.image-wrapper');
        if (targetWrapper) {
            targetWrapper.classList.remove('is-hovered');
            Array.from(imageGrid.value.children).forEach(otherWrapper => {
                otherWrapper.style.pointerEvents = 'auto';
            });
        }
    }, true);
});

onUnmounted(() => {
    if (scrollAnimationId !== null) {
        cancelAnimationFrame(scrollAnimationId);
    }
    if (lazyLoadObserver) {
        lazyLoadObserver.disconnect();
    }
    if (imageGridContainer.value) {
        imageGridContainer.value.removeEventListener('mouseenter', () => {});
        imageGridContainer.value.removeEventListener('mouseleave', () => {});
    }
    if (imageGrid.value) {
        imageGrid.value.removeEventListener('mouseenter', () => {}, true);
        imageGrid.value.removeEventListener('mouseleave', () => {}, true);
    }
});
</script>

<style>
/* 定义一个缩放因子 */
:root {
    --scale-factor: 1.5; /* 调整为 1.5 */
}

.honor-wall-section {
    /* 原始值乘以 --scale-factor */
    --img-width: calc(150px * var(--scale-factor));
    --img-height: calc(90px * var(--scale-factor));
    --grid-gap: calc(10px * var(--scale-factor));
    --container-padding: calc(15px * var(--scale-factor));
    --num-columns: 5;
    --num-rows: 3;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    padding: calc(var(--spacing-2xl, 40px) * var(--scale-factor)) 0;
    overflow: hidden;
    font-family: var(--font-family-sans);
    background-color: var(--color-background);
    width: 100%;
}

/* 标题字体和间距也需要调整 */
.honor-wall-section .section-header h2 {
    font-size: calc(2.5rem * var(--scale-factor));
    margin-bottom: calc(var(--spacing-md, 16px) * var(--scale-factor));
}

.honor-wall-section .section-header p {
    font-size: calc(1.1rem * var(--scale-factor));
}

.honor-wall-section .container {
    width: 100%;
    max-width: 1200px; /* 根据需要调整最大宽度 */
    margin: 0 auto;
    padding: 0 var(--container-padding);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.background-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background-secondary);
    filter: blur(calc(5px * var(--scale-factor)));
    z-index: -1;
}

.image-grid-container {
    width: 100%; /* 占据父容器的全部宽度 */
    max-width: calc(var(--num-columns) * (var(--img-width) + var(--grid-gap)) - var(--grid-gap) + 2 * var(--container-padding)); /* 限制最大宽度 */
    height: calc(var(--num-rows) * (var(--img-height) + var(--grid-gap)) - var(--grid-gap) + 2 * var(--container-padding));

    border: calc(1px * var(--scale-factor)) solid var(--color-border);
    border-radius: calc(12px * var(--scale-factor));
    overflow: hidden;
    position: relative;
    background-color: var(--color-card);
    backdrop-filter: blur(calc(8px * var(--scale-factor)));
    box-shadow: var(--shadow-lg);
    padding: var(--container-padding);
    margin-top: calc(var(--spacing-xl, 20px) * var(--scale-factor));
    margin-left: auto; /* 确保在父容器中居中 */
    margin-right: auto; /* 确保在父容器中居中 */
}

.image-grid {
    display: grid;
    grid-template-rows: repeat(var(--num-rows), var(--img-height));
    grid-auto-flow: column;
    gap: var(--grid-gap);
    position: absolute;
    top: var(--container-padding);
    left: var(--container-padding);
    height: auto;
    box-sizing: border-box;
    will-change: transform;
}

.image-wrapper {
    width: var(--img-width);
    height: var(--img-height);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: box-shadow var(--transition-normal), border-color var(--transition-normal);
    border: calc(1px * var(--scale-factor)) solid var(--color-border);
    border-radius: calc(8px * var(--scale-factor));
    background-color: var(--color-background-secondary);
    box-shadow: var(--shadow-sm);
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper img {
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    display: block;
    border-radius: calc(6px * var(--scale-factor));
    background-color: var(--color-background-secondary);
    animation: pulse 1.5s infinite ease-in-out;
    opacity: 0;
    transition: opacity var(--transition-normal), transform var(--transition-normal);
    will-change: transform, opacity;
}

.image-wrapper img.loaded {
    animation: none;
    opacity: 1;
}

@keyframes pulse {
    0% {
        opacity: 0.6;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.6;
    }
}

.image-wrapper.is-hovered {
    overflow: visible;
    z-index: 100;
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary);
}

.image-wrapper.is-hovered img {
    transform: scale(calc(1.3 * var(--scale-factor)));
}

/* 响应式设计 - 所有尺寸变量也需要按比例缩放 */
@media (max-width: calc(1200px * var(--scale-factor))) {
    .honor-wall-section {
        --num-columns: 4;
    }
}

@media (max-width: calc(992px * var(--scale-factor))) {
    .honor-wall-section {
        --num-columns: 3;
        --img-width: calc(120px * var(--scale-factor));
        --img-height: calc(72px * var(--scale-factor));
    }
}

@media (max-width: calc(768px * var(--scale-factor))) {
    .honor-wall-section {
        --num-columns: 2;
        --img-width: calc(100px * var(--scale-factor));
        --img-height: calc(60px * var(--scale-factor));
        padding: calc(var(--spacing-xl, 20px) * var(--scale-factor)) 0;
    }
    .image-grid-container {
        margin-top: calc(var(--spacing-lg, 16px) * var(--scale-factor));
    }
}

@media (max-width: calc(480px * var(--scale-factor))) {
    .honor-wall-section {
        --num-columns: 1;
        --img-width: calc(180px * var(--scale-factor));
        --img-height: calc(108px * var(--scale-factor));
        padding: calc(var(--spacing-md, 16px) * var(--scale-factor)) 0;
    }
    /* 移除重复的宽度计算，因为已由上层样式处理 */
    /* .image-grid-container 的宽度现在由其父容器和 max-width 控制 */
}
</style>
