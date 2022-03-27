import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const CardNFT: FC = () => {
  const { t } = useTranslation()
  const ethereumBg = { backgroundImage: 'url(/images/ethereum.svg)' }
  return (
    <div className="p-1 w-1/2">
      <div className="block bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <div className="w-full pb-full h-0">
          <img src="./images/temp/1.png" alt="NFT" />
        </div>
        <div className="p-2 text-xs">
          <p className="text-gray-400 py-1">AAA Collection</p>
          <div className="flex items-center">
            <span className="block py-1 text-white font-bold">#1234</span>
            <div className="flex items-center ml-auto py-1">
              <i className="w-4 h-4 bg-no-repeat bg-left-top bg-contain" style={ethereumBg} />
              <span className="block text-white font-bold">0.5</span>
            </div>
          </div>
          <div className="mt-4 pb-1">
            <button
              type="button"
              className="w-full flex items-center justify-center p-2 rounded-lg text-white text-sm font-extrabold bg-aid-purple hover:bg-aid-blue hover:text-gray-800 md:py-4 md:px-10 transition-all duration-300">
              {t('donation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardNFT
