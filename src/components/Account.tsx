import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { style } from '../data/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

// interface AccountProps {
// }

const Account: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={`${style.roundBox}`}>
      <div className="bg-gray-400 w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto overflow-hidden">
        <img src="./images/account.png" alt="profile" />
      </div>
      <div
        className={`bg-indigo-900 text-white flex items-center w-min mx-auto ${style.roundContent} ${style.innerContentInterval}`}>
        <p className="text-sm md:text-base">0xabd3...92211</p>
        <button type="button" className="px-2 -mr-2">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      <p className={`text-lg md:text-xl font-bold  ${style.innerContentInterval}`}>4.445 ETH</p>
      <button
        type="button"
        className={`px-4 py-2 border border-gray-600 text-gray-600 font-bold text-xs md:text-sm ${style.roundContent} ${style.innerContentInterval} hover:bg-aid-blue transition duration-300`}>
        {t('wallet.wallet_disconnect')}
      </button>
    </div>
  )
}

export default Account
