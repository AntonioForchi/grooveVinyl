import React from 'react'
import TiltedCard from './ui/tiltedCard'

const PinnedArtists = () => {
  return (
    <>
      <div id='artists' className='h-auto w-screen lg:w-[90vw] bg-[#121212] flex flex-col items-center justify-center py-[10vh] gap-[2vh]'>
        <h1 className='text-white text-5xl font-bold text-center'>Your Artists</h1>
        <h2 className='text-gray-500 text-xl font-medium w-[80vw] tablet:w-[60vw] laptop:w-[50vw] surface:w-[30vw] text-center'>Browse and pin your Spotify artists to access them easily</h2>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-[10vw] lg:gap-[4vw] w-[68vw] h-auto mt-[8vh]'>

          <TiltedCard
            imageSrc="/StArtist.webp"
            altText="Sleep Token"
            captionText="Sleep Token"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-lg font-bold">
                Sleep Token
              </p>
            }
          />

          <TiltedCard
            imageSrc="/dpsArtist.jpeg"
            altText="Dead Poets Society"
            captionText="Dead Poets Society"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-lg font-bold">
                Dead Poets Society
              </p>
            }
          />

          <TiltedCard
            imageSrc="/midnightArtist.jpeg"
            altText="The Midnight"
            captionText="The Midnight"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white text-lg font-bold">
                The Midnight
              </p>
            }
          />
        </div>
      </div>
    </>
  )
}

export default PinnedArtists