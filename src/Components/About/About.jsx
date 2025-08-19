import React from 'react'
import AboutSection1 from '../AboutSection1/AboutSection1'
import GraidSection from '../GraidSection/GraidSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUsSection'
import AboutShow from '../AboutShow/AboutShow'
import AboutBrandsSection from '../AboutBrandsSection/AboutBrandsSection'
import Testimonials from '../Testimonials/Testimonials'
import AboutFaq from '../AboutFAQ/AboutFAQ'

export default function About() {
  return <>
   <div className="bg-white max-w-10xl lg:rounded-[60px] relative z-50 mt-[-50px] mb-[-50px] mx-auto px-4 py-10">
  <AboutSection1/>
  <GraidSection/>
  <WhyChooseUsSection/>
  <AboutShow/>
  <AboutBrandsSection/>
  <Testimonials/>
  <AboutFaq/>
  
  </div>
  </>
}
