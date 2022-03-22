import React, { FC } from 'react'

interface ButtonProps {
  title: string
}

const Button:FC<ButtonProps> = ({title}) => {
  return (
    <div className="mt-3">
      <button
        type="button"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-indigo-700 font-extrabold bg-indigo-100 hover:bg-indigo-300 md:py-4 md:text-lg md:px-10 transition-all duration-300"
      >
        {title}
      </button>
    </div>
  )
}

export default Button
