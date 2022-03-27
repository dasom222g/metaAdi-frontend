import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { style } from '../data/style'

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
        <button type="button" className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <p className={`text-lg md:text-xl font-bold  ${style.innerContentInterval}`}>4.445 ETH</p>
      <button
        type="button"
        className={`px-4 py-2 border border-gray-600 text-gray-600 font-bold text-xs md:text-sm ${style.roundContent} ${style.innerContentInterval}`}>
        {t('wallet.wallet_disconnect')}
      </button>
    </div>
  )
}

export default Account
