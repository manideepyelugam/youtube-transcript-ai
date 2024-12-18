import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Input from './Components/Input';
import Search from './Components/Search';
import ChatSection from './Components/ChatSection';


const App = () => {

  

    return (
        <>
        <div className='h-screen w-full flex items-center flex-col bg-gradient-to-t from-[rgba(2,2,4,1)] to-[rgba(61,31,145,1)]'>
            
               <Navbar/>           
               <Hero/>
               <Input/>

        </div>

            <div className='h-screen w-full bg-[#04010e] flex items-center flex-col py-10'>

                <div className='mt-20 mb-14'>
                    <h1 className='text-white font-bold text-4xl text-center leading-[44px]'>Got Questions? Our Bot Has Answers.</h1>
                    <p className='text-[#adadad] text-sm pt-3 text-center font-medium leading-[24px] '>Chat with our bot and get answer directly from <br /> YouTube Transcripts</p>
                </div>


                <ChatSection/>

            </div>

     

        
        </>
    );
};

export default App;
