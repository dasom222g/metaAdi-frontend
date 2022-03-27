import React, { FC } from 'react'

const CardNFT: FC = () => {
  const ethereumBg = { backgroundImage: 'url(/images/ethereum.svg)' }
  return (
    <div className="px-1 py-2 w-1/2">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="w-full pb-full h-0">
          <img src="./images/temp/1.png" alt="NFT" />
        </div>
        <div className="p-2 text-xs">
          <p className="text-gray-400 py-1">AAA Collection</p>
          <span className="block py-1 text-white font-bold">#1234</span>
          <div className="flex items-center">
            <i className="w-4 h-4 bg-no-repeat bg-left-top bg-contain" style={ethereumBg} />
            <span className="block py-1 text-white font-bold">0.5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardNFT
