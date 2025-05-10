import React from 'react'

interface SecondaryButtonProps {
    text: string;
    link: string;
  }

const SecondaryButton: React.FC<SecondaryButtonProps> = ({text, link}) => {
  return (
    <>
        <a href={link} className='bg-[#181818] text-white font-bold text-2xl px-8 py-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out'>
            {text}
        </a>
    </>
  )
}

export default SecondaryButton