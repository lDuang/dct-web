#!/usr/bin/env python3
"""下载技术图标到本地"""

import os
import urllib.request

# Simple Icons CDN
SIMPLEICONS_BASE = "https://cdn.simpleicons.org/"

# 本地存储目录
OUTPUT_DIR = "public/tech-icons"

# 需要下载的图标 slug
ICONS = [
    'arduino', 'c', 'cloudflare', 'cplusplus', 'docker', 'electron', 'figma',
    'freebsd', 'go', 'haskell', 'javascript', 'kubernetes', 'leetcode', 'linux',
    'llvm', 'mongodb', 'mysql', 'netbsd', 'nextdotjs', 'nodedotjs', 'ocaml',
    'openbsd', 'opengl', 'openjdk', 'postgresql', 'python', 'raspberrypi',
    'react', 'redis', 'redox', 'ros', 'rust', 'sqlite', 'swift', 'tauri',
    'typescript', 'uikit', 'vercel', 'vuedotjs', 'vulkan', 'webgpu', 'zig',
]

# 特殊图标（非 Simple Icons）
SPECIAL_ICONS = {
    # STM 官方
    'stm': 'https://www.st.com/resource/logo/st_logo.svg',
    # CUDA
    'cuda': 'https://images.icon-icons.com/2107/SVG/file_type_cuda_icon_130656.svg',
}

# 没有 Simple Icons 的，用空或替代
NO_ICON = ['dragonflybsd', 'rtos', 'openmp']


def download_simpleicon(slug: str, output_dir: str) -> bool:
    """下载 Simple Icons 图标"""
    url = f"{SIMPLEICONS_BASE}{slug}"
    output_path = os.path.join(output_dir, f"{slug}.svg")

    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        print(f"✓ {slug}.svg")
        return True
    except Exception as e:
        print(f"✗ {slug}.svg: {e}")
        return False


def download_custom(name: str, url: str, output_dir: str) -> bool:
    """下载自定义图标"""
    output_path = os.path.join(output_dir, f"{name}.svg")

    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        print(f"✓ {name}.svg (自定义)")
        return True
    except Exception as e:
        print(f"✗ {name}.svg: {e}")
        return False


def main():
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    # 创建输出目录
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"输出目录: {OUTPUT_DIR}\n")

    # 下载 Simple Icons
    print("下载 Simple Icons:")
    for slug in ICONS:
        download_simpleicon(slug, OUTPUT_DIR)

    # 下载特殊图标
    print("\n下载特殊图标:")
    for name, url in SPECIAL_ICONS.items():
        download_custom(name, url, OUTPUT_DIR)

    print(f"\n完成! 图标保存在 {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
