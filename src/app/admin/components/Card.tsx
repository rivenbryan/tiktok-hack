import React from 'react'
import InformationComponent from './InformationComponent'

type Props = {
    name: string
    children?: React.ReactNode
}

export default function Card({name, children}: Props) {
  return (
    <div className="bg-white flex flex-col p-2 pl-4 gap-2 rounded-md w-100 pb-10">
    <div>
      <div className="flex flex-col pt-5 items-start gap-6">
        <h1 className=" text-xl font-bold">{name}</h1>
        {children}
      </div>
    </div>
  </div>
  )
}