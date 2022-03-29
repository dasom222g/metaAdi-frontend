import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ImageCard from '../components/ImageCard'
import TitleBox from '../components/TitleBox'
import { warMainImage } from '../data/response'

const Why: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleBox
        mainTitle={t('main.why_main_title')}
        subTitle={t('main.why_sub_title')}
        align={'center'}
        color={'white'}
      />
      <div className="md:flex max-w-3xl mx-auto">
        <p className="text-sm font-normal text-white py-2 md:w-3/4 md:min-w-3/4">
          {t('main.why_description')}
        </p>
        <div className="hidden md:block">
          <ImageCard info={warMainImage} />
        </div>
      </div>
    </>
  )
}

export default Why
