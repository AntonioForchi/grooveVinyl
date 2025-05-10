import React from 'react'
import { Check } from 'lucide-react'
import PricingCard from './ui/pricingCard'

const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    description: "Basic vinyl visualization",
    features: [
      "Connect to Spotify",
      "View your top 5 playlists",
      "Basic vinyl visualization",
      "Standard vinyl themes",
    ],
  },
  {
    title: "Premium",
    price: "$4.99",
    period: "per month",
    description: "Enhanced experience with more features",
    features: [
      "All Free features",
      "Unlimited playlist",
      "Custom vinyl colors",
      "HD album art integration",
      "Audio visualizer effects",
      "No advertisements",
    ],
    popular: true,
  },
  {
    title: "Family",
    price: "$9.99",
    period: "per month",
    description: "Share with up to 5 family members",
    features: [
      "All Premium features",
      "Up to 5 family accounts",
      "Family mixtape creation",
      "Collaborative vinyl collections",
      "Advanced customization",
      "Priority support",
    ],
  },
];


const Pricing = () => {
  return (
    <>
    <div id='pricing' className='h-auto w-screen lg:w-[90vw] bg-[#121212] flex flex-col items-center justify-center py-[10vh] gap-[2vh]'>
            <h1 className='text-white text-5xl w-[70vw] font-bold text-center '>Choose Your Plan</h1>
            <h2 className='text-gray-500 text-xl font-medium w-[80vw] tablet:w-[60vw] laptop:w-[50vw] surface:w-[30vw] text-center'>Choose Your Plan</h2>
    
            <div className='grid grid-cols-1 laptop:grid-cols-3 justify-center items-center gap-[10vw] lg:gap-[4vw] w-auto fullhd:w-[78vw] qhd:w-[68vw] h-auto mt-[8vh]'>
                {pricingOptions.map((option, index) => ( 
                    <PricingCard
                        key={index}
                        title={option.title}
                        price={option.price}
                        period={option.period}
                        description={option.description}
                        features={option.features}
                        popular={option.popular}
                    />
                ))}
            </div>
          </div>
    </>
  )
}

export default Pricing