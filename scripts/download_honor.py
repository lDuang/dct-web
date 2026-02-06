#!/usr/bin/env python3
"""下载荣誉墙图片并转换为 WebP 格式"""

import os
import urllib.request

# 原始图片链接
IMAGE_LINKS = [
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
    'https://cloud.duapp.dev/f/YlYIM/IMG_1351.jpeg',
]

OUTPUT_DIR = "public/honor"
TARGET_SIZE = 100 * 1024  # 100KB

def download_and_convert(url: str, index: int):
    """下载并转换为 WebP"""
    import io
    from PIL import Image

    output_path = os.path.join(OUTPUT_DIR, f"honor_{index}.webp")

    try:
        # 下载原始图片
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=60) as response:
            img_data = response.read()

        # 打开图片
        img = Image.open(io.BytesIO(img_data))

        # 转换为 RGB（如果是 RGBA）
        if img.mode == 'RGBA':
            white_bg = Image.new('RGB', img.size, (255, 255, 255))
            white_bg.paste(img, mask=img.split()[3])
            img = white_bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # 二分法找合适的 WebP 质量
        min_quality, max_quality = 1, 100
        best_quality = 80
        best_size = float('inf')

        while min_quality <= max_quality:
            quality = (min_quality + max_quality) // 2
            temp_path = output_path + '.tmp'

            img.save(temp_path, 'WEBP', quality=quality, method=6)
            size = os.path.getsize(temp_path)

            if size <= TARGET_SIZE and size < best_size:
                best_quality = quality
                best_size = size
                min_quality = quality + 1
            else:
                max_quality = quality - 1

            os.remove(temp_path)

        # 用最佳质量保存
        img.save(output_path, 'WEBP', quality=best_quality, method=6)
        final_size = os.path.getsize(output_path)
        print(f"✓ honor_{index}.webp: {len(img_data) // 1024}KB → {final_size // 1024}KB (质量: {best_quality})")

    except Exception as e:
        print(f"✗ honor_{index}: {e}")


def main():
    import io

    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"目标大小: {TARGET_SIZE // 1024}KB\n")

    for i, url in enumerate(IMAGE_LINKS):
        download_and_convert(url, i)

    print(f"\n完成! 图标保存在 {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
