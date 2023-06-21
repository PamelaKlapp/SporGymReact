import React from 'react'
import FAQ from '../components/FAQ'
import MainHeader from '../components/MainHeader'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import Values from '../components/Values'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQ/>
    <Testimonials/>
    </>
  )
}

export default Home