import React, { FC } from 'react'
import SuccessCard from '../components/SuccessCard'
import { style } from '../data/style'

const DonationSuccess: FC = () => {
  return (
    <div className="max-w-2xl mx-auto pt-4 md:pt-6">
      <div className={`${style.contentInterval}`}>
        <SuccessCard />
      </div>
    </div>
  )
}

export default DonationSuccess
