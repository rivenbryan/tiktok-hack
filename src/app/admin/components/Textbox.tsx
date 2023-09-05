import React from 'react'

type Props = {
  placeholder?: string,
  height?: string;
  handleUpdate?: any;
  value?: number;
}

export default function Textbox({placeholder, height, handleUpdate, value}: Props) {
  if (height === undefined){
    height = "2.1rem"
  }
  return (
    <input type="text" onChange={handleUpdate} id="first_name" value={value} style={{height: height}}className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder={placeholder} required/>
  )
}