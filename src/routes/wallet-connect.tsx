import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleBox from '../components/TitleBox'

const Wallteconnect = () => {
  const { t } = useTranslation()
  return (
    <div className="h-full">
      <TitleBox mainTitle={t('wallet.connect_wallet')} subTitle={t('wallet.connect_with_one')} align={'center'} color={'white'} />
      <div>
        <img className="max-h-52 md:max-h-60 mx-auto" src="./images/wallet.svg" alt="wallet" />
      </div>
    </div>
  )
}

export default Wallteconnect