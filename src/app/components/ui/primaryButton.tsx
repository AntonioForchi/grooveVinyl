import React from 'react'
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  text: string;
  link: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, link}) => {
  return (
    <>
        <a href={link} className='bg-green-600 text-white font-bold text-2xl px-8 py-4 rounded-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center gap-2'>
            {text}
            <ArrowRight className='ml-2' size={20} strokeWidth={2} color='white'></ArrowRight>
        </a>
    </>
  )
}

export default PrimaryButton