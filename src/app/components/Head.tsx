import Image from 'next/image'
import React from 'react'

const Head = () => {
  return (
    <div>
      <div className='bg-purple-950 w-[1600px] h-[800px] '>
        <p className='text-white py-14 ml-10 text-2xl'> Build ecom sites, super fast</p>
        <p className='text-white text-sm relative bottom-10 ml-9'>This template was built to help you rapidly, and modularly, build out high quality e-commerce concepts using pre-built content blocks, components and styles.Customise and play around with the template to match your specific requirements, and most of all have fun with it! </p>


        <div className="bg-purple-700 text-white p-8 rounded-md shadow-lg max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Use the styles</h2>
          <p className="text-sm mb-4">
            Styles in Figma mean you don’t have to repetitively enter values for typography, colors, and elevations, minimizing the risk of inconsistencies and streamlining the design process.
            Styles in Figma mean you don’t have to repetitively enter values for typography, colors, and elevations, minimizing the risk of inconsistencies and streamlining the design process.
          </p>
          <p className="text-sm">
            Within this template, you can find color and type styles and their definitions on the style guide page. To use them, simply select them from the Figma style panel as shown below.
          </p>
          <Image
            src="/d.jpg"
            alt=""
            width={200}
            height={100}
            className='w-[200px] py-12 h-[300px]' />
        </div>
        <div className='h-[310px] relative bottom-80 left-64'>
        <Image
          src="/s.jpg"
          alt=''
          width={226}
          height={310} />
      </div>
      <div className='h-[310px] relative bottom-96  left-60'>
        <Image
        src="/g.jpg"
        alt=''
        width={236}
        height={100}
        className='bottom-52 left-64 relative'/>
      </div>
      </div>
    </div>
  )
}

export default Head












