import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleBox from '../components/TitleBox'

const Why = () => {
  const { t } = useTranslation()
  

  return (
    <>
      <TitleBox mainTitle={t('main.why_donate')} subTitle={t('main.ukraine_midst')} />
    </>
  )
}

export default Why