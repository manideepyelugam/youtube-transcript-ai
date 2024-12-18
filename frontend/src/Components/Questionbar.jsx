import React, { useContext, useState } from 'react'
import { FinalContext } from '../src/Context';
const Questionbar = () => {
    const [text,setText] = useState("");
    const {setQuestion,handleBard} = useContext(FinalContext)

    function submitHandler(){
        if (text.trim() === '') {
            alert('Please enter a valid Question');
            console.log(text);
            
            return;
          }   
          setQuestion(text);
          setText('')
          handleBard()
        }


  return (
    <div>
            <input type="text" onChange={e => setText(e.target.value)} value={text}/>
            <button onClick={submitHandler}>Send</button>
    </div>
  )
}

export default Questionbar