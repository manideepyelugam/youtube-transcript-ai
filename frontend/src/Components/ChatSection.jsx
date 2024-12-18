import React, { useContext, useEffect, useState,useRef } from 'react'
import { FinalContext } from '../Context';

const ChatSection = () => {
    const [que,setQue] = useState('');
    const [chat,setChat] = useState([]);

    const {summary,handleBard,transcript} = useContext(FinalContext)
    const bottomRef = useRef(null);


    function enter(e){
        if(e.key === "Enter"){
            submit()
        }
    }

    function submit(){
        if(que.trim() === ""){
            alert("Ask a question!!");
            return;
        }

        if(transcript === ""){
            alert("Give the Youtube URL, then ask the question");
            setQue('')
            return;
        }
        handleBard(que);
        setChat(prev => [...prev,{"type":"que","que" :que}]) 
        setQue('')   
    }

  


    useEffect(() => {

        function update(){

            if (summary && summary.trim() !== '') { 
                setChat((prev) => [...prev, { type: 'ans', que: summary }]);
            }
            
        }

        update()

    },[summary])

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chat]);

    // console.log(chat);
    

  return (
    <div className='h-[600px] overflow-hidden w-2/3 border border-[#424242] rounded-xl flex flex-col'>

        <div className='h-[88%] w-full px-5 py-3 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 '>
                {chat.map((msg,index) => (
                   <div key={index} className={`flex mb-6 ${(msg.type == "que") ? 'justify-end' : 'justify-start'}`}>
                    {msg.type == "que"? <p className='text-white bg-[#505050] px-4 rounded-md  py-2'>{msg.que}</p> :  <p className='text-white w-4/5 bg-[#8a60ff] px-4 rounded-md py-2'>{msg.que}</p> }
                           
                   </div>
                ))}
                        <div ref={bottomRef} ></div>
        </div>



        <div className='flex items-center justify-between px-5  h-[12%]'>
                <input type="text" className='bg-transparent border outline-none rounded-md py-2 border-[#8a60ff] w-[90%] text-white px-3 text-[14px] font-medium' onChange={e => setQue(e.target.value)} onKeyDown={enter}  value={que} placeholder='Ask your Qestion here!!'/>
                <button onClick={submit} className='bg-[#8a60ff] py-2 rounded-md text-white px-8' >Send</button>
        </div>
    </div>
  )
}

export default ChatSection
