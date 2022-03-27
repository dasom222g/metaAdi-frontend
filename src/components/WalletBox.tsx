import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { WalletType } from '../lib/type'
import WalletBoxButton from './WalletBoxButton'

const WalletBox: FC = () => {
  const { t } = useTranslation()
  const wallets: WalletType[] = [
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

  return (
    <div className="mx-auto md:max-w-md">
      <div className="rounded-lg overflow-hidden">
        {wallets.map((wallet) => (
          <WalletBoxButton key={wallet.id} wallet={wallet} />
        ))}
      </div>
    </div>
  )
}

export default WalletBox
