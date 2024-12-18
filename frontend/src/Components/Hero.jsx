import React from 'react'

const Hero = () => {
  return (
    
    <div className='text-[#e2e2e2]  h-[500px] w-full flex items-center justify-center flex-col'>
        <div className='bg-[#6b3bee] rounded-md mb-10'>
            <p className='px-3 py-1 text-[12px] font-semibold'>We use Bard</p>
        </div>
        <h1 className='text-center text-[#ffffff] font-bold text-[50px] leading-[55px] mb-9 '>Analyze YouTube Videos with AI. <br />And get Answers Instantly!</h1>
        <p className='text-sm text-[#adadad] font-semibold text-center leading-[22px]'>Paste your YouTube URL, chat with our AI bot, and get instant <br /> answers—it's that simple!</p>
    </div>
  )
}

export default Hero