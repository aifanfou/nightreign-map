export type SeedImageProvider = {
  surfaceImageUrl: string
  undergroundImageUrl: string
  sourceLabel: string
}

const getBasePath = (): string => process.env.NEXT_PUBLIC_PAGES_ASSET_BASE_URL || ''

const baseProvider = {
  get baseUrl() { return `${getBasePath()}/Images/pattern/` },
  fileExtension: 'jpg',
  sourceLabel: '本地'
}

const dlcProvider = {
  baseUrl: 'https://kevins78.github.io/nightreigndlcseeds/images/',
  fileExtension: 'png',
  sourceLabel: 'kevins78'
}

export function getSeedImageProvider(seedId: string): SeedImageProvider {
  const parsedSeedId = Number(seedId)

  const isLegacySeed = Number.isFinite(parsedSeedId) && parsedSeedId >= 0 && parsedSeedId <= 319
  const isPost1000Seed = Number.isFinite(parsedSeedId) && parsedSeedId >= 1000

  const provider = isLegacySeed || isPost1000Seed ? baseProvider : dlcProvider

  // 本地文件已补零为三位(000-999), 千位数以上保持不变
  let fileName = seedId
  if (provider === baseProvider && parsedSeedId < 1000) {
    fileName = parsedSeedId.toString().padStart(3, '0')
  }

  const surfaceImageUrl = `${provider.baseUrl}${fileName}.${provider.fileExtension}`
  const undergroundImageUrl = `${provider.baseUrl}${fileName}_under.${provider.fileExtension}`

  return {
    surfaceImageUrl,
    undergroundImageUrl,
    sourceLabel: provider.sourceLabel
  }
}
