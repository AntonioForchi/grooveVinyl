import React from 'react'
import Vinyl from './ui/vinyl'
import PrimaryButton from './ui/primaryButton'
import SecondaryButton from './ui/secondaryButton'
import { Music } from "lucide-react";

const Hero = () => {
  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen w-screen lg:w-[90vw] bg-[#121212]'>
            <div className='flex flex-col justify-center items-center laptop:items-start w-full laptop:px-[5vw] laptopM:px-[8vw] fullhd:px-[10vw] qhd:px-[12vw] text-center lg:text-left gap-2'>
                <h1 className='text-white font-bold fullhd:text-7xl laptopM:text-6xl text-5xl'>Your Spotify</h1>
                <h1 className='text-white font-bold fullhd:text-7xl laptopM:text-6xl text-5xl'>Collection</h1>
                <h1 className='text-green-600 font-bold fullhd:text-7xl laptopM:text-6xl text-5xl mb-[1vh]'>Vinyl Style</h1>
                <p className='text-gray-500 text-md laptop:text-lg fullhd:text-2xl laptop:w-[26vw] w-[75vw]'>GrooveVinyl connects to your Spotify account and transforms your digital music into beautiful vinyl records and sleeves you can interact with.</p>
                <div className='flex flex-col laptop:flex-row gap-4 my-[3vh] justify-center laptop:justify-start'>
                    <PrimaryButton text='Get Started' link='/auth/login'></PrimaryButton>
                    <SecondaryButton text='Learn More' link='/about'></SecondaryButton>
                </div>
                <div className='flex items-center gap-3'>
                    <Music className='text-gray-500'></Music>
                    <p className='text-gray-500 text-sm laptopM:text-md fullhd:text-lg qhd:text-xl lg:w-[23vw]'>Works with your existing Spotify Premium account</p>
                </div>
            </div>

            <div className='hidden laptop:flex items-center justify-center w-full relative '>
                <Vinyl src='/STEIA.jpg' alt='' tailwindClasses='w-[30vw] h-[30vw] text-[30vw] laptop:w-[30vw] laptop:h-[30vw] laptop:text-[30vw]'></Vinyl>
                <div className='absolute top-60 right-0 w-[20vw] h-[20vw] bg-gradient-to-b from-green-500/20 to-green-300/20 rounded-full blur-3xl opacity-50'></div>  
                <div className='absolute bottom-60 left-0 w-[20vw] h-[20vw] bg-gradient-to-b from-violet-500/20 to-violet-300/20 rounded-full blur-3xl opacity-50'></div>  
            </div>

        </div>
    </>
  )
}

export default Hero