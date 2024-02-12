import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Home = () => {
  const backgroundImageUrl = './bg2.jpg';

  return (
    <div className=''>
      <Header />
      <div
        className='min-h-screen  flex pt-8 sm:justify-end sm:items-center md:justify-end md:items-center '
        style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='sm:w-1/2 sm:px-8 text-center sm:text-left px-4 w-full '>
          <h2 className='sm:text-6xl text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600'>
            The Best University of State
          </h2>
          <h1 className='sm:text-2xl sm:text-gray-200 text-lg  font-bold text-gray-800 mb-6'>
            "NexusPulse University: A Legacy of Learning, Shaping Futures, and Celebrating Excellence!"
          </h1>
          <div className='pt-[630px] sm:pt-0'>
          <button
            className="sm:w-48 w-full h-12  overflow-hidden rounded-3xl text-lg shadow bg-cover bg-center border-2 border-purple-400 relative group"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-br from-teal-400 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative group-hover:text-white sm:text-gray-200 text-gray-200">
              Register Today..
            </span>
          </button>
          </div>
        </div>
      </div>


      {/* Second Page */}
      <div className='border border-black h-auto flex flex-col items-center gap-10 bg-gradient-to-bl from-green-300 via-blue-500 to-purple-300'>
        <div className='font-extrabold text-amber-300 align-middle text-5xl pt-32'>Our Campus has</div>
        <div className='flex flex-wrap flex-row justify-evenly p-4 gap-8 '>
                <Card imageSrc='c2.jpg' text='Arts'  />
                <Card imageSrc='c4.jpg' text='Community' />
                <Card imageSrc='c3.jpg' text='Outdoor Education' />
        </div>
      </div>

      <Footer/>
    </div>

    
  );
};



//Reusable Component
export const Card = ({ imageSrc, text }) => {
  return (
    <div className='relative group border border-amber-500 h-[500px] '>
      <div className='flex flex-row justify-evenly'>
        <div className='relative border border-black h-[500px] w-[300px]  transition-all group-hover:opacity-80'>
          <img src={imageSrc} alt='Card Image' className='object-cover w-full h-full rounded-md' />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
            <p className='text-white font-extrabold text-3xl'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
