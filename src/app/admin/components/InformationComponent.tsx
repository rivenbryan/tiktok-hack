import React from 'react'

type Props = {
    title: string,
    description: string
    isStar: boolean
}

export default function InformationComponent({title, description, isStar}: Props) {
  return (
    <div>
        { isStar ? <h2 className='text-xs font-bold'> * {title}</h2> : <h2 className='text-xs font-bold'> {title}</h2>  }
        
        <p className='text-xs py-2'>{description}</p>
    </div>
  )
}