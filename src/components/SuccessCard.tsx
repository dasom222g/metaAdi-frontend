import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { style } from '../data/style'

const SuccessCard: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={`${style.roundBox}`}>
      <div className="max-w-xs w-3/4 mx-auto overflow-hidden pt-3 md:pt-4">
        <img src="./images/thank.svg" alt="thank" />
      </div>
      <div className="text-gray-800 py-4 md:py-6">
        <p className="sub-title text-base md:text-lg font-normal py-1 md:py-2">
          {t('donation.success')}
        </p>
        <h2 className="title tracking-tight font-black text-xl md:text-3xl py-1 md:py-2">
          {t('donation.thank')}
        </h2>
      </div>
    </div>
  )
}

export default SuccessCard
