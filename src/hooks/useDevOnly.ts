import { useMemo } from 'react'

type DevOnlyOptions<T> = {
  allItems: T[]
  devOnly: T
}

/**
 * 开发模式下只返回单一项，生产模式返回全部项
 * @param options 配置选项
 * @returns 根据环境返回对应的数据
 *
 * @example
 * const images = useDevOnly({
 *   allItems: [image1, image2, image3],
 *   devOnly: image1
 * })
 */
export const useDevOnly = <T>({ allItems, devOnly }: DevOnlyOptions<T>): T[] => {
  return useMemo(() => {
    return import.meta.env.DEV ? [devOnly] : allItems
  }, [allItems, devOnly])
}
