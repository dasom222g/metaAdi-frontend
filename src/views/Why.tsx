import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import TitleBox from '../components/TitleBox'

const Why: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleBox
        mainTitle={t('main.why_donate')}
        subTitle={t('main.ukraine_midst')}
        align={'center'}
      />
    </>
  )
}

export default Why
