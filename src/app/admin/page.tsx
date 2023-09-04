import React from 'react'
import NavbarForAdmin from '../../component/NavbarForAdmin'
import { AiOutlineArrowLeft, AiOutlineQuestionCircle } from "react-icons/ai"
type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <NavbarForAdmin />
            <div className='bg-gray-100'>
                <div className='flex items-center h-20 ml-32 mr-32'>
                    <div className='flex-row gap-5'>
                        <div className='flex items-center'>
                            <AiOutlineArrowLeft />
                            <h1 className='pl-2 font-light'>Manage Products</h1>
                        </div>
                        <h1 className="text-2xl font-bold">Add New Product</h1>
                    </div>

                    <div className='flex ml-auto gap-2 pt-5'>
                        
                        <button className="bg-gray-200 px-2 rounded ">
                            <AiOutlineQuestionCircle />
                        </button>
                        <button className="bg-gray-200 py-2 px-4 rounded">
                            Save as a draft
                        </button>
                        <button className="py-2 px-4 rounded bg-emerald-600 text-sm text-white">
                            Submit for review
                        </button>
                    </div>
                </div>



            </div>
        </>
    )
}