import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Share from '../components/Share'
import SuccessCard from '../components/SuccessCard'
import { style } from '../data/style'

const DonationSuccess: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="pt-4 md:pt-6">
      <div className={`max-w-2xl mx-auto ${style.contentInterval}`}>
        <SuccessCard />
      </div>
      <div className={`${style.contentInterval} text-center`}>
        <Share title={t('donation.sns_title')} hashtag={t('donation.sns_hashtag')} />
      </div>
    </div>
  )
}

export default DonationSuccess
