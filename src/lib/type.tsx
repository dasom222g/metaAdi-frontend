const enum Align {
  left,
  center,
  right,
}

export type AlignType = keyof typeof Align

export const enum Wallet {
  META_MASK,
  WALLET_CONNECT,
}

export interface WalletType {
  id: number
  type: keyof typeof Wallet
  title: string
}

export const enum CardStateType {
  sales,
  view,
}

export interface InfoType {
  id: number
  name?: string
  nickname: string
  position: string
  email: string
  snsList: SnsType[]
}

export interface SnsType {
  id: PlatformCodeEnum
  platform: PlatformEnum
  link: string
}

export const enum PlatformEnum {
  GITHUB = 'github',
  DISCORD = 'discord',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  TELEGRAM = 'telegram',
  YOUTUBE = 'youtube',
}

export const enum PlatformCodeEnum {
  GITHUB = 1,
  DISCORD = 2,
  FACEBOOK = 3,
  INSTAGRAM = 4,
  TWITTER = 5,
  TELEGRAM = 6,
  YOUTUBE = 7,
}

export const enum FileFormatEnum {
  PNG = 'png',
  JPG = 'jpg',
  SVG = 'svg',
}

export interface ImageInfoType {
  id: number
  fileName: string
  fileFormat: FileFormatEnum
}
