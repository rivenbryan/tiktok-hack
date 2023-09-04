"use client"
import React from 'react'
import Image from 'next/image'
import TiktokLogo from '../../img/TiktokLogo.PNG'
import smallLogo from '../../img/icons.PNG'
import homeLogo from "../../img/home_icon.png"
type Props = {}

export default function NavbarForAdmin({ }: Props) {
  return (
    <div className='bg-black h-14 flex items-center gap-2'>
      <Image
        className='pl-2'
        src={TiktokLogo}
        width={100}

        alt="Picture of the author"
      />
      <div className='flex gap-6'>
        <a className='text-white font-bold'> | </a>
        <a className='text-white font-bold'> Seller Center </a>
        <a className='text-white font-bold'> Data Compass </a>
        <a className='text-white font-bold'> Affiliate Marketing </a>
        <a className='text-white font-bold'> Live Manager </a>
        <a className='text-white font-bold'> Academy </a>
      </div>

      <div className='flex ml-auto mr-10 items-center'>
        <Image
        src={smallLogo}
        width={130}
        alt="Picture of the author"
        />
        <Image
        src={homeLogo}
        width={25}
        height={25}
        />
        <a className='text-white text-xs text-opacity-75 p-2'>Bryan Account</a>
      </div>
    </div>
  );
}