import React, { FC } from 'react'
import { AlignType } from '../lib/type'

interface TitleBoxProps {
  mainTitle: string
  subTitle: string
  description?: string
  align: AlignType
}

const TitleBox:FC<TitleBoxProps> = ({mainTitle, subTitle, description, align}) => {
  return (
    <div className={`text-gray-800, text-${align} px-4 pb-6 md:pb-8`}>
      <h2 className="title text-3xl tracking-tight font-extrabold md:text-5xl">{mainTitle}</h2>
      <p className="sub-title text-lg md:text-2xl font-normal mt-6 md:mt-8">{subTitle}</p>
      {description && <p className="sub-title text-base md:text-lg font-normal mt-6 md:mt-7">{description}</p>}
    </div>
  )
}

export default TitleBox
