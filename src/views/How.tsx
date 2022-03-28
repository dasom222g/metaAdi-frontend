import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import TitleBox from '../components/TitleBox'

const Why: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleBox
        mainTitle={t('main.how_main_title')}
        subTitle={t('main.how_sub_title')}
        align={'center'}
      />
      <div className="px-4">
        <div className="w-52 bg-aid-purple rounded-xl border border-gray-800 text-white">
          <div className="flex items-start">
            <span className="text-lg font-bold py-1">1.</span>
            <div className="px-2">
              <h3 className="text-lg font-bold py-1">{t('main.how_step1_title')}</h3>
              <p className="text-sm py-1">{t('main.how_step1_description')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Why
