import React from 'react'
import VinylSheet from './ui/vinylSheet'

const FavSongs = () => {
  return (
    <>
      <div id='songs' className='h-auto w-screen bg-[#181818] flex flex-col items-center justify-center py-[10vh] gap-[2vh]'>
            <h1 className='text-white text-5xl font-bold text-center'>Your Favorite Songs</h1>
            <h2 className='text-gray-500 text-xl font-medium w-[80vw] tablet:w-[60vw] laptop:w-[50vw] surface:w-[30vw] text-center'>Experience your top tracks as spinning vinyl records</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15vh] tablet:gap-[8vh] laptop:gap-[10vh] w-[70vw] laptop:w-[80vw] qhd:w-[68vw] mt-[12vh] tablet:mt-[6vh]'>
                <div className='flex items-center justify-center'>
                    <VinylSheet src='/STEIA.jpg' albumName='Even in Arcadia - Dangerous'></VinylSheet>
                </div>

                <div className='flex items-center justify-center'>
                    <VinylSheet src='/languageAlbum.jpeg' albumName='Language - Thrive'></VinylSheet>
                </div>

                <div className='flex items-center justify-center'>
                    <VinylSheet src='/tpwbytAlbum.jpeg' albumName='TPWBYT - Alkaline'></VinylSheet>
                </div>

                <div className='flex items-center justify-center'>
                    <VinylSheet src='/diamondEyesAlbum.jpeg' albumName='Diamond Eyes - Diamond Eyes'></VinylSheet>
                </div>

                <div className='flex items-center justify-center'>
                    <VinylSheet src='/iridiscentAlbum.jpeg' albumName='Iridiscent - Translate the Night'></VinylSheet>
                </div>

                <div className='flex items-center justify-center'>
                    <VinylSheet src='/heavenerAlbum.jpeg' albumName='Heavener - Sleepless Deathbed'></VinylSheet>
                </div>
            </div>
        </div>
    </>
  )
}

export default FavSongs