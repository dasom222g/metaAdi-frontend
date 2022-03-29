import React, { FC } from 'react'
import { ImageInfoType } from '../lib/type'

interface ImageCardProps {
  width?: string
  widthMd?: string
  info: ImageInfoType
}

const ImageCard: FC<ImageCardProps> = ({ info, width, widthMd }) => {
  const { fileName, fileFormat } = info
  return (
    <div
      className={`p-2 rounded-lg ${width ? 'w-' + width : ''} ${widthMd ? 'md:w-' + widthMd : ''}`}>
      <div className="rounded-lg overflow-hidden w-full h-0 pb-full">
        <img
          src={`./images/contents/${fileName}.${fileFormat}`}
          className="w-full h-auto"
          alt="war"
        />
      </div>
    </div>
  )
}

export default ImageCard
