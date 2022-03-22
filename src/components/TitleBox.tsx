import React, { FC } from 'react'

interface TitleBoxProps {
  mainTitle: string
  subTitle: string
  description?: string
}

const TitleBox:FC<TitleBoxProps> = ({mainTitle, subTitle, description}) => {
  return (
    <div>
      <h2 className="title text-3xl">{mainTitle}</h2>
      <p className="sub-title mt-6">{subTitle}</p>
      {description && <p className="sub-title mt-6">{description}</p>}
    </div>
  )
}

export default TitleBox
