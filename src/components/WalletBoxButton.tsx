import React, { FC } from 'react'
import { WalletType } from '../lib/type'

interface WalletBoxButtonProps {
  wallet: WalletType
}

const WalletBoxButton: FC<WalletBoxButtonProps> = ({ wallet }) => {
  const { title } = wallet
  return (
    <button
      type="button"
      className="flex items-center w-full border-gray-300 border-t first:border-t-0 text-sm font-bold py-3 px-4 text-left bg-yellow-50 md:hover:bg-yellow-100 transition duration-300">
      <i
        className="h-6 w-6 bg-cover bg-no-repeat bg-center inline-block mr-3"
        style={{ backgroundImage: `url(/images/${title}.svg)` }}
      />
      {title}
      <div></div>
    </button>
  )
}

export default WalletBoxButton
