import React, { FC } from 'react'
import { style } from '../lib/data'
import { AlignType } from '../lib/type'

interface TitleBoxProps {
  mainTitle: string
  subTitle: string
  description?: string
  align: AlignType
  color?: string
}

const TitleBox: FC<TitleBoxProps> = ({ mainTitle, subTitle, description, align, color }) => {
  return (
    <div
      className={`text-gray-800, text-${align} ${style.contentInterval} ${
        color ? 'text-' + color : ''
      }`}>
      <h2 className="title text-3xl tracking-tight font-black md:text-5xl">{mainTitle}</h2>
      <p className="sub-title text-lg md:text-2xl font-normal mt-6 md:mt-8">{subTitle}</p>
      {description && (
        <p className="sub-title text-base md:text-lg font-normal mt-6 md:mt-7">{description}</p>
      )}
    </div>
  )
}

export default TitleBox
