import React from 'react'

type Props = {
  placeholder?: string,
  height?: string;
}

export default function Textbox({placeholder, height}: Props) {
  if (height === undefined){
    height = "2.1rem"
  }
  return (
    <input type="text" id="first_name" style={{height: height}}className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder={placeholder} required/>
  )
}