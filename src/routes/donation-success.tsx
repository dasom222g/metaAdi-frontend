import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CardNFT from '../components/CardNFT'
import Share from '../components/Share'
import SuccessCard from '../components/SuccessCard'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'

const DonationSuccess: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="pt-4 md:pt-6">
      <div className={`max-w-2xl mx-auto ${style.contentInterval}`}>
        <SuccessCard />
      </div>
      {/* <div className={`${style.contentInterval} max-w-2xl mx-auto`}>
        <p className="title tracking-tight font-black text-xl md:text-base py-1 text-center text-white md:py-2">
          Your NFT #1234
        </p>
        <CardNFT type={CardStateType.view} />
      </div> */}
      <div className={`${style.contentInterval} text-center`}>
        <Share title={t('donation.sns_title')} hashtag={t('donation.sns_hashtag')} />
      </div>
      <div className={`${style.contentInterval} pt-0 md:pt-0 max-w-2xl mx-auto`}>
        <CardNFT type={CardStateType.view} />
        <p className="title tracking-tight font-black text-xl md:text-base py-1 text-center text-white md:py-2">
          Your NFT #1234
        </p>
      </div>
    </div>
  )
}

export default DonationSuccess
