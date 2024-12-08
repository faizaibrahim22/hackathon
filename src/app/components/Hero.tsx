import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";


const Hero = () => {
    return (
        <div className='relative justify-center bottom-56 ml-10'>

            <div className="bg-purple-700 bottom-96 relative ml-96  left-96 text-white p-8 rounded-md shadow-lg max-w-3xl w-full h-[546px]">
                <div className=''>
                    <h2 className="text-2xl font-semibold mb-4">Use the components</h2>
                    <p className="text-sm mb-4">
                        There’s a bunch of pre-configured components for you to use in this free template.
                    </p>
                    <p className="text-sm">
                        Simply go to
                        the Style Guide page and under the components header you can see everything included. Buttons, steppers, filter options and more for you to integrate into your screens and modify to
                        your tastes and requirements.
                    </p>
                </div>
                <Image
                    src="/Product Card.jpg"
                    alt=""
                    width={190}
                    height={100}
                    className='m-10' />
                <div className='relative bottom-96'>
                    <Image
                        src="/card1.jpg"
                        alt=''
                        width={160}
                        height={100}
                        className='relative top-11 ml-64' />
                    <div className='ml-32 relative  right-10 bottom-44'>
                        <Button className='bg-white  w-40 h-16 ml-96  text-black'>Button</Button>
                        <Button className='bg-blue-950 w-40 ml-96 h-16  text-black'>Button</Button>
                        <Button className='bg-white h-16 w-40 ml-96  text-black'>Button</Button>
                        <Button className='bg-purple-600 h-16 w-40 ml-96  text-black'>Button</Button>
                        <div className='relative bottom-72 ml-80 pl-60'>
                            <MdOutlineCheckBoxOutlineBlank />
                            <p className='relative bottom-5  ml-5'>Furniture</p>
                            <MdOutlineCheckBox />
                            <p className='relative bottom-5  ml-4'>Homeware</p>

                            <MdOutlineCheckBoxOutlineBlank />
                            <p className='relative bottom-5  ml-4'>Vases</p>

                            <MdOutlineCheckBoxOutlineBlank />
                            <p className='relative bottom-5  ml-4'>Products</p>
                            <MdOutlineCheckBoxOutlineBlank />
                            <p className='relative bottom-5  ml-4'>Components</p>
                            <MdOutlineCheckBoxOutlineBlank />
                            <p className='relative bottom-5  ml-4'> Styleguide</p>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
