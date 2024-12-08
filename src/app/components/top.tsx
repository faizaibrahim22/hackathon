import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Top = () => {
    return (
        <div className='relative bottom-52'>
            <div className="relative bottom-96  ">
                <div className='relative  bottom-96 left-96 ml-10'>

                    <div className="bg-purple-700 relative bottom-96 left-96 text-white p-8 rounded-md shadow-lg max-w-3xl w-[899px] h-[500px]">
                        <h2 className="text-2xl font-semibold mb-4">Use the content blocks</h2>
                        <p className="text-sm mb-4">
                            We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.
                        </p>
                           <Image
                           src="/Image (2).jpg"
                           alt=''
                           width={348}
                           height={200}
                           className='relative top-4 mb-2  right-7'/>
                           <div className='bg-white relative bottom-56  ml-80 pl-5 mr-72 text-black w-[400px] h-[230px]'>
                           <p className='font-semibold text-lg'>
                            Join the club and get the benefits</p>
                           <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                           <input
                           type="text"
                           placeholder='your@email.com'
                           className='bg-yellow-100 w-[300px] h-[30px] text-yellow-300'/>
                           <Button className='bg-teal-700 text-black'>SingUp</Button>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top
