import { pagesWebpUrl } from '@/lib/pagesAssets'

export interface Seed {
  seed_id: string
  map_type: string
  slots: Record<string, string>
  nightlord?: string
  Event?: string
  coordinates?: Record<string, { x: number; y: number }>
}

export const MAP_TYPES = [
  {
    key: 'mountaintop',
    title: '雪山',
    cardImage: pagesWebpUrl('/Images/mapTypes/mountainIcon.webp')
  },
  {
    key: 'noklateo',
    title: '诺克拉特奥',
    cardImage: pagesWebpUrl('/Images/mapTypes/noklateoIcon.webp')
  },
  {
    key: 'normal',
    title: '普通',
    cardImage: pagesWebpUrl('/Images/mapTypes/normalIcon.webp')
  },
  {
    key: 'rotted',
    title: '腐烂森林',
    cardImage: pagesWebpUrl('/Images/mapTypes/rotIcon.webp')
  },
  {
    key: 'crater',
    title: '火山口',
    cardImage: pagesWebpUrl('/Images/mapTypes/craterIcon.webp')
  },
  {
    key: 'greatHollow',
    title: '大空洞',
    cardImage: pagesWebpUrl('/Images/mapTypes/greatHollowIcon.webp')
  }
]