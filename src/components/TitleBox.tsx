import React, { FC } from 'react'
import { style } from '../data/style'
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
      className={`text-gray-800 text-${align} ${style.contentInterval} ${
        color ? 'text-' + color : ''
      }`}>
      <h2 className="text-3xl tracking-tight font-black md:text-5xl py-3 md:py-4">{mainTitle}</h2>
      <p className="text-lg md:text-2xl font-normal py-3 md:py-4">{subTitle}</p>
      {description && (
        <p className="text-base md:text-lg font-normal py-3 md:py-4">{description}</p>
      )}
    </div>
  )
}

export default TitleBox
