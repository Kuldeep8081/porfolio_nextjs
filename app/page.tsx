import AboutMe from '@/components/AboutMe'
import HeroSection from '@/components/HeroSection'
import MyServices from '@/components/MyServices'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <MyServices/>
    </div>
  )
}

export default page