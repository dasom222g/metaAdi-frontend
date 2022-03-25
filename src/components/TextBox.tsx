import React, { FC } from 'react'

interface TextBoxProps {
  label: string
  value?: string
  disabled?: boolean
  color?: string
}

const TextBox: FC<TextBoxProps> = ({ label, value, disabled, color }) => {
  return (
    <label className="block">
      <span className={`text-${color || 'gray-800'}`}>{label}</span>
      <input
        type="text"
        value={value || ''}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aid-light-purple focus:ring focus:ring-aid-light-purple disabled:opacity-80 transition duration-300"
        disabled={typeof disabled === 'boolean' ? disabled : false}
      />
    </label>
  )
}

export default TextBox
