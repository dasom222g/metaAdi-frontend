import { t } from 'i18next'
import { WalletType } from '../lib/type'

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
