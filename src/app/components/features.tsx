import React from 'react'
import { 
    Disc, 
    Headphones, 
    Share2, 
    AudioWaveform, 
    FileMusic, 
    Palette 
  } from "lucide-react";

const Features = () => {

    const featureItems = [
        {
          icon: <Disc className="h-10 w-10 text-green-600" />,
          title: "Vinyl Visualization",
          description: "See your music as virtual vinyl records that spin while you listen"
        },
        {
          icon: <Headphones className="h-10 w-10 text-green-600" />,
          title: "Seamless Playback",
          description: "Control your Spotify playback directly from the vinyl interface"
        },
        {
          icon: <Share2 className="h-10 w-10 text-green-600" />,
          title: "Social Sharing",
          description: "Share your vinyl collection and current spins on social media"
        },
        {
          icon: <AudioWaveform className="h-10 w-10 text-green-600" />,
          title: "Audio Visualizer",
          description: "Watch your vinyl respond to the music with dynamic animations"
        },
        {
          icon: <FileMusic className="h-10 w-10 text-green-600" />,
          title: "Playlist Sleeves",
          description: "Browse your playlists as a collection of customizable vinyl sleeves"
        },
        {
          icon: <Palette className="h-10 w-10 text-green-600" />,
          title: "Custom Themes",
          description: "Personalize your vinyl collection with different colors and styles"
        }
      ];

  return (
    <>
        <div id='features' className='h-auto w-screen lg:w-[90vw] bg-[#121212] flex flex-col items-center justify-center py-[10vh] gap-[2vh]'>
            <h1 className='text-white text-5xl font-bold text-center'>Experience Music Visually</h1>
            <h2 className='text-gray-500 text-xl font-medium w-[80vw] tablet:w-[60vw] laptop:w-[50vw] surface:w-[30vw] text-center'>GrooveVinyl combines the nostalgia of vinyl records with the convenience of digital streaming</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[5vh] w-[70vw] laptop:w-[90vw] laptopM:w-[80vw] surface:w-[68vw] mt-[6vh]'>
                {featureItems.map((feature, index) => (
                <div 
                    key={index} 
                    className="p-10 rounded-xl bg-[#181818] border border-[#181818]/20 hover:border-green-600 transition-all duration-300"
                >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Features