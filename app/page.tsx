import AboutMe from '@/components/AboutMe'
import HeroSection from '@/components/HeroSection'
import MyServices from '@/components/MyServices'
import ProjectsSection from '@/components/ProjectsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <MyServices/>
      <ProjectsSection/>
    </div>
  )
}

export default page