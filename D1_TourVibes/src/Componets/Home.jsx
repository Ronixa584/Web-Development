import React from 'react'
import { Header } from './Header'
import { Slider } from './Slider'
import Footer from './Footer'

export const Home = () => {
    const backgroundImageUrl = './bg1.png';
  return (
    <div className='min-h-screen' style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header/>
    <Slider/>
    <Footer/>
    </div>
  )
}

