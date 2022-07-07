import React from 'react'
import CoursesGrid from '../components/CoursesGrid/CoursesGrid'
import Footer from '../components/Footer/Footer'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import HeroClean from '../components/HeroClean/HeroClean'
import Navbar from '../components/Navbar/Navbar'


export default function Main() {
  return (
    <>  
        <Navbar active={true}></Navbar>
        <HeroCarousel></HeroCarousel>
        <CoursesGrid></CoursesGrid>
        <HeroClean direction={'row'}></HeroClean>
        <HeroClean direction={'flex-row-reverse'}></HeroClean>
        <HeroClean direction={'row'}></HeroClean>
        <Footer></Footer>
    </>
  )
}
