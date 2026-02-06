#!/usr/bin/env python3
"""压缩荣誉墙图片到 500KB 以下"""

from PIL import Image
import os

# 目标大小：100KB
TARGET_SIZE = 100 * 1024  # bytes
INPUT_DIR = "public/honor"

def compress_image(filepath: str, target_size: int = TARGET_SIZE) -> bool:
    """压缩单张图片到目标大小以下"""
    original_size = os.path.getsize(filepath)
    if original_size <= target_size:
        print(f"✓ {os.path.basename(filepath)}: {original_size // 1024}KB (无需压缩)")
        return False

    img = Image.open(filepath)
    # 如果是 RGBA 模式，转换为 RGB
    if img.mode == 'RGBA':
        white_bg = Image.new('RGB', img.size, (255, 255, 255))
        white_bg.paste(img, mask=img.split()[3])
        img = white_bg
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    # 二分法找合适的质量参数
    min_quality, max_quality = 1, 95
    best_quality = max_quality
    best_size = original_size

    while min_quality <= max_quality:
        quality = (min_quality + max_quality) // 2
        temp_path = filepath + '.tmp'

        img.save(temp_path, 'JPEG', quality=quality, optimize=True)
        new_size = os.path.getsize(temp_path)

        if new_size <= target_size and new_size < best_size:
            best_quality = quality
            best_size = new_size
            min_quality = quality + 1
        else:
            max_quality = quality - 1

        os.remove(temp_path)

    # 如果最佳质量仍然导致文件变大，使用更激进的方法
    if best_size >= original_size:
        # 降低分辨率
        width, height = img.size
        scale = 0.8
        while scale >= 0.5:
            new_size = int(width * scale), int(height * scale)
            resized = img.resize(new_size, Image.LANCZOS)
            temp_path = filepath + '.tmp'
            resized.save(temp_path, 'JPEG', quality=75, optimize=True)
            file_size = os.path.getsize(temp_path)
            os.remove(temp_path)

            if file_size <= target_size:
                resized.save(filepath, 'JPEG', quality=75, optimize=True)
                print(f"✓ {os.path.basename(filepath)}: {original_size // 1024}KB → {file_size // 1024}KB (缩放: {scale:.0%})")
                return True
            scale -= 0.1

    # 用最佳质量保存
    img.save(filepath, 'JPEG', quality=best_quality, optimize=True)
    new_size = os.path.getsize(filepath)
    print(f"✓ {os.path.basename(filepath)}: {original_size // 1024}KB → {new_size // 1024}KB (质量: {best_quality})")
    return True

def main():
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    jpg_files = sorted([f for f in os.listdir(INPUT_DIR) if f.endswith('.jpg')], key=lambda x: int(x.split('_')[1].split('.')[0]))

    print(f"找到 {len(jpg_files)} 张图片")
    print(f"目标大小: {TARGET_SIZE // 1024}KB\n")

    for filename in jpg_files:
        filepath = os.path.join(INPUT_DIR, filename)
        compress_image(filepath)

    print("\n完成!")

if __name__ == "__main__":
    main()
