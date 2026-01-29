/* components/HonorWall.tsx */
import { useEffect, useRef, useState } from 'react'

const imageLinks = [
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

type ImageItem = { id: number; src: string; x: number; y: number }

const HonorWall = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const animationId = useRef<number | null>(null)
  const scrollX = useRef(0)
  const lastTimestamp = useRef(0)
  const [displayImages, setDisplayImages] = useState<ImageItem[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const nextIdRef = useRef(0)

  const imgWidth = 200
  const imgHeight = 150
  const gap = 16
  const numRows = 3

  useEffect(() => {
    const initialItems: ImageItem[] = []
    let currentX = 0
    let currentY = 0

    for (let set = 0; set < 3; set++) {
      for (let i = 0; i < imageLinks.length; i++) {
        initialItems.push({ id: nextIdRef.current++, src: imageLinks[i], x: currentX, y: currentY })
        currentY += imgHeight + gap
        if ((i + 1) % numRows === 0) {
          currentX += imgWidth + gap
          currentY = 0
        }
      }
    }
    setDisplayImages(initialItems)

    const grid = gridRef.current
    const container = containerRef.current
    if (!grid || !container) return

    const colsPerSet = Math.ceil(imageLinks.length / numRows)
    const widthOfOneSet = colsPerSet * imgWidth + (colsPerSet - 1) * gap

    grid.style.height = `${numRows * imgHeight + (numRows - 1) * gap}px`
    grid.style.width = `${widthOfOneSet * 2}px`

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp
      const delta = timestamp - lastTimestamp.current
      lastTimestamp.current = timestamp

      const speed = 30
      scrollX.current -= (speed * delta) / 1000

      grid.style.transform = `translateX(${scrollX.current}px)`


      if (scrollX.current < -imgWidth - gap) {
        scrollX.current += imgWidth + gap

        setDisplayImages(prev => {
          const removed = prev.slice(0, numRows)
          const remaining = prev.slice(numRows)
          // 剩余图片的 x 值左移一列宽度
          const remainingUpdated = remaining.map(item => ({
            ...item,
            x: item.x - (imgWidth + gap),
          }))
          // 移除的图片放到最右边
          const maxX = Math.max(...remainingUpdated.map(item => item.x))
          const removedWithNewPos = removed.map(item => ({
            ...item,
            x: maxX + imgWidth + gap + (item.x - removed[0].x),
          }))
          return [...remainingUpdated, ...removedWithNewPos]
        })
      }

      animationId.current = requestAnimationFrame(animate)
    }

    animationId.current = requestAnimationFrame(animate)

    const pause = () => {
      if (animationId.current !== null) {
        cancelAnimationFrame(animationId.current)
        animationId.current = null
      }
    }

    const resume = () => {
      if (animationId.current === null) {
        lastTimestamp.current = 0
        animationId.current = requestAnimationFrame(animate)
      }
    }

    container.addEventListener('mouseenter', pause)
    container.addEventListener('mouseleave', resume)

    return () => {
      if (animationId.current !== null) {
        cancelAnimationFrame(animationId.current)
      }
      container.removeEventListener('mouseenter', pause)
      container.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section id="honor-wall" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12 mb-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
            Honor Wall
          </span>
          <h2 className="text-4xl font-semibold">荣誉墙</h2>
          <p className="text-[var(--color-text-secondary)]">我们团队的成就与荣誉</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <div ref={gridRef} style={{ position: 'relative' }}>
          {displayImages.map((item, index) => (
            <div
              key={item.id}
              className="absolute group overflow-hidden rounded-xl cursor-pointer"
              style={{ width: imgWidth, height: imgHeight, left: item.x, top: item.y }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ opacity: hoveredIndex === index ? 1 : 0.85 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HonorWall
