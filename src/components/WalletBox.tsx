import React, { FC } from 'react'
// import { useTranslation } from 'react-i18next'
import { walletList } from '../data/response'
import { WalletType } from '../lib/type'
import WalletBoxButton from './WalletBoxButton'

const WalletBox: FC = () => {
  // const { t } = useTranslation()
  const wallets: WalletType[] = walletList

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
