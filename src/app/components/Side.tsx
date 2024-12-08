import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";


import Image from 'next/image'

const Side = () => {
    return (
        <div className='relative bottom-44'>
            <div className='bg-purple-950 w-[1600px] relative  bottom-96 h-[800px] '>
                <div className="bg-purple-700 text-white p-8 rounded-md shadow-lg max-w-3xl w-full h-[500px]">
                    <h2 className="text-2xl font-semibold mb-4">Check the layouts</h2>
                    <p className="text-sm mb-4">
                        As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes. Play around with replacing and modifying the nested content blocks and to switch device, simply use
                        the content block property ‘device’ to toggle between mobile and desktop.</p>
                    <Image
                        src="/Banners.jpg"
                        alt=""
                        width={200}
                        height={10} />
                    <div className='bg-white h-[34.32px] w-[200px] flex  text-black '>
                        <p className='ml-4 top-3 w-32px h-14'> Avion</p>
                        <div className=' ml-16 top-4 relative '>
                            <IoSearch />
                        </div>
                        <div className='top-4 ml-2 relative'>
                            <FaShoppingCart /></div>

                        <div className='top-4  ml-2 relative '><FaRegUserCircle />
                        </div>
                        <div className='top-4 relative'><IoMenuSharp /></div>
                    </div>

                    <div>
                        <Image
                            src="/Image.jpg"
                            alt=''
                            width={200}
                            height={100} />
                    </div>
                </div>
                <div  className="relative bottom-80 ml-72">
                <Image
                    src="/Banners.jpg"
                    alt=""
                    width={200}
                    height={10} />

                <div className='bg-white h-[34.32px]  w-[200px] flex text-black '>
                    <p className='ml-4 top-3 w-32px h-14'> Avion</p>
                    <div className=' ml-16 top-4 relative '>
                        <IoSearch />
                    </div>
                    <div className='top-4 ml-2 relative'>
                        <FaShoppingCart /></div>

                    <div className='top-4  ml-2 relative '><FaRegUserCircle />
                    </div>
                    <div className='top-4 relative'><IoMenuSharp /></div>
                </div>

                <div>
                    <Image
                        src="/Image (1).jpg"
                        alt=''
                        width={200}
                        height={100} />
                </div>
                <div className='relative  right-4 top-14'>

                <div  className="relative bottom-80 ml-72">
                <Image
                    src="/Banners.jpg"
                    alt=""
                    width={200}
                    height={10} />
                <div className='bg-white h-[34.32px]  relative w-[200px] flex text-black '>
                    <p className='ml-4 top-3 w-32px h-14'> Avion</p>
                    <div className='ml-32 relative'><IoMenuSharp /></div>
                </div>
                <div className='relative '>
                    <Image
                        src="/Bottom Bar.jpg"
                        alt=''
                        width={200}
                        height={100} 
                        className=''/>
                        <Image
                        src="/Product Details.jpg"
                        alt=''
                        width={200}
                        height={100}/>
</div>
                </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Side
