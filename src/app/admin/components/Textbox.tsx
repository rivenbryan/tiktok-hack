import React from 'react'

type Props = {
  placeholder?: string,
  height?: string;
  handleUpdate?: any;
}

export default function Textbox({placeholder, height, handleUpdate}: Props) {
  if (height === undefined){
    height = "2.1rem"
  }
  return (
    <input type="text" onChange={handleUpdate} id="first_name" style={{height: height}}className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder={placeholder} required/>
  )
}