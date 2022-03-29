import { t } from 'i18next'
import { InfoType, PlatformCodeEnum, PlatformEnum, WalletType } from '../lib/type'

export const data = {
  addressUk: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
}

export const walletList: WalletType[] = [
  {
    id: 1,
    type: 'META_MASK',
    title: t('wallet.meta_mask'),
  },
  {
    id: 2,
    type: 'WALLET_CONNECT',
    title: t('wallet.wallet_connect'),
  },
]

export const personInfoList: InfoType[] = [
  {
    id: 1,
    nickname: 'Somi',
    email: 'dasom228@gmail.com',
    snsList: [
      {
        id: PlatformCodeEnum.TWITTER,
        platform: PlatformEnum.TWITTER,
        link: 'https://twitter.com/dasom228',
      },
      {
        id: PlatformCodeEnum.INSTAGRAM,
        platform: PlatformEnum.INSTAGRAM,
        link: 'https://www.instagram.com/puddingi228',
      },
      {
        id: PlatformCodeEnum.YOUTUBE,
        platform: PlatformEnum.YOUTUBE,
        link: 'https://www.youtube.com/channel/UCw2v-EFHM2R_PidUq68_QIA',
      },
    ],
  },
  {
    id: 2,
    nickname: 'h6442',
    email: 'dasom228@gmail.com',
    snsList: [
      {
        id: PlatformCodeEnum.INSTAGRAM,
        platform: PlatformEnum.INSTAGRAM,
        link: 'https://www.instagram.com/puddingi228',
      },
      {
        id: PlatformCodeEnum.YOUTUBE,
        platform: PlatformEnum.YOUTUBE,
        link: 'https://www.youtube.com/channel/UCw2v-EFHM2R_PidUq68_QIA',
      },
    ],
  },
]
