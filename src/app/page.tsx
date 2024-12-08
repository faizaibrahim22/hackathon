import React from 'react'
import Head from '../app/components/Head'
import Hero from './components/Hero'
import Side from './components/Side'
import Bar from './components/top'
const page = () => {
  return (
    <div>
      <Head/>
      <Hero/>
      <Side/>
      <Bar/>
    </div>
  )
}

export default page
