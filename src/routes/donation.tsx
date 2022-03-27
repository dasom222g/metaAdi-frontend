import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Account from '../components/Account'
import CardNFT from '../components/CardNFT'
import TextBox from '../components/TextBox'
import { data } from '../data/response'
import { style } from '../data/style'
import { CardStateType } from '../lib/type'

const Donation: FC = () => {
  const { t } = useTranslation()

  // view
  return (
    <div className="max-w-2xl mx-auto pt-4 md:pt-6">
      <div className={`${style.contentInterval}`}>
        <Account />
      </div>
      <div className={`${style.contentInterval}`}>
        <TextBox
          label={t('donation.to_ukraine')}
          value={data.addressUk}
          disabled={true}
          color={'white'}
        />
      </div>
      <div className={`${style.contentInterval}`}>
        <div className="flex flex-wrap -mx-1">
          <CardNFT type={CardStateType.sales} />
          <CardNFT type={CardStateType.sales} />
        </div>
      </div>
    </div>
  )
}

export default Donation
