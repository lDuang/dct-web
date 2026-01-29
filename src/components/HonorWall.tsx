import { useEffect, useRef, useState } from 'react';

const originalImageLinks = [
  'https://cloud.duapp.dev/f/5Lfq/IMG_1365.jpeg',
  // 'https://cloud.duapp.dev/f/JrhY/IMG_1368.jpeg',
  // 'https://cloud.duapp.dev/f/PMUN/IMG_0736.jpeg',
  // 'https://cloud.duapp.dev/f/3QCb/IMG_1367.jpeg',
  // 'https://cloud.duapp.dev/f/oWBiY/IMG_1349.jpeg',
  // 'https://cloud.duapp.dev/f/GgFM/IMG_1366.jpeg',
  // 'https://cloud.duapp.dev/f/9GsR/IMG_1364.jpeg',
  // 'https://cloud.duapp.dev/f/bvto/IMG_1363.jpeg',
  // 'https://cloud.duapp.dev/f/BnSn/IMG_1362.jpeg',
  // 'https://cloud.duapp.dev/f/L2HY/IMG_1361.jpeg',
  // 'https://cloud.duapp.dev/f/ZWTY/IMG_1359.jpeg',
  // 'https://cloud.duapp.dev/f/g5iA/IMG_1358.jpeg',
  // 'https://cloud.duapp.dev/f/lGI0/IMG_1355.jpeg',
  // 'https://cloud.duapp.dev/f/XOcO/IMG_1356.jpeg',
  // 'https://cloud.duapp.dev/f/V0f2/IMG_1357.jpeg',
  // 'https://cloud.duapp.dev/f/N6h9/IMG_1354.jpeg',
  // 'https://cloud.duapp.dev/f/8XUg/IMG_1353.jpeg',
  // 'https://cloud.duapp.dev/f/WYFk/IMG_1352.jpeg',
  // 'https://cloud.duapp.dev/f/DRsP/IMG_1304.jpeg',
  // 'https://cloud.duapp.dev/f/nvXHY/IMG_1350.jpeg',
  // 'https://cloud.duapp.dev/f/azlTy/IMG_1360.jpeg',
  // 'https://cloud.duapp.dev/f/YlYIM/IMG_1351.jpeg'
];

const HonorWall = () => {
  const imageGridRef = useRef<HTMLDivElement>(null);
  const imageGridContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationId = useRef<number | null>(null);
  const currentScrollX = useRef(0);
  const lastTimestamp = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const images = [...originalImageLinks, ...originalImageLinks];

  useEffect(() => {
    const section = document.getElementById('honor-wall');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const grid = imageGridRef.current;
    const container = imageGridContainerRef.current;
    if (!grid || !container) return;

    const imgWidth = 200;
    const imgHeight = 150;
    const gridGap = 16;
    const numRows = 3;

    const totalImagesInOneSet = originalImageLinks.length;
    const totalColumnsInOneSet = Math.ceil(totalImagesInOneSet / numRows);
    const widthOfOneSet = totalColumnsInOneSet * imgWidth + (totalColumnsInOneSet > 0 ? (totalColumnsInOneSet - 1) * gridGap : 0);
    const resetScrollPoint = -widthOfOneSet;

    grid.style.height = `${numRows * imgHeight + (numRows - 1) * gridGap}px`;

    const animateScroll = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;
      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      const pixelsPerSecond = 20;
      const pixelsToMove = (pixelsPerSecond * deltaTime) / 1000;

      currentScrollX.current -= pixelsToMove;

      if (currentScrollX.current < resetScrollPoint) {
        currentScrollX.current += widthOfOneSet;
      }

      grid.style.transform = `translateX(${currentScrollX.current}px)`;
      scrollAnimationId.current = requestAnimationFrame(animateScroll);
    };

    const lazyLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('img');
          if (img && (img as HTMLImageElement).dataset.src && !(img as HTMLImageElement).src) {
            (img as HTMLImageElement).src = (img as HTMLImageElement).dataset.src!;
            img.onload = () => img.classList.add('loaded');
            lazyLoadObserver.unobserve(entry.target);
          }
        }
 });
    }, { root: container, rootMargin: '0px 300px 0px 300px' });

    Array.from(grid.children).forEach(child => lazyLoadObserver.observe(child));

    scrollAnimationId.current = requestAnimationFrame(animateScroll);

    const pauseAnimation = () => {
      if (scrollAnimationId.current !== null) {
        cancelAnimationFrame(scrollAnimationId.current);
        scrollAnimationId.current = null;
      }
    };

    const resumeAnimation = () => {
      if (scrollAnimationId.current === null) {
        lastTimestamp.current = 0;
        scrollAnimationId.current = requestAnimationFrame(animateScroll);
      }
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      if (scrollAnimationId.current !== null) {
        cancelAnimationFrame(scrollAnimationId.current);
      }
      lazyLoadObserver.disconnect();
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };

  }, []);

  return (
    <section id="honor-wall">
      <div>
        <div>
          <div>
            <span>HONOR WALL</span>
            <h2>荣誉墙</h2>
            <p>我们团队的成就与荣誉</p>
          </div>
        </div>
      </div>
      <div ref={imageGridContainerRef}>
        <div ref={imageGridRef}>
          {images.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img data-src={link} alt="荣誉图片" />
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorWall;
