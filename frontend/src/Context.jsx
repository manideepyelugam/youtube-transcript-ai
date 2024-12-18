import { useState,useEffect,createContext, Children } from "react";
import Fetch from "./Fetch";
import Bard from "./Bard";


export const FinalContext = createContext();


const Context = ({children}) => {

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    // const [question,setQuestion] = useState('');
    const [url,setUrl] = useState('');
    const [transcript,setTranscript] = useState('');
    const [summary,setSummary] = useState('');

    useEffect(() => {
      if(!url) return;
      // console.log(url);
      

      async function generateTranscript(){

        try {
          setLoading(true)
             const data = await Fetch(url);
             setTranscript(data)
             setLoading(false)
            //  console.log(data);
             
        } catch (error) {
             setError("error in generateTranscript");
             console.log(`error in generateTranscript ${error}`)
        }
         
      }

      generateTranscript()
    },[url])




  async function handleBard(currentQuestion) {
    if (!transcript) {
        setError("Transcript is empty. Unable to generate AI response.");
        return;
    }

    async function generateAi() {
        try {
            const questionn = `You are given the transcript of a YouTube video. Use the content of the transcript as your primary source to answer the following question. If the transcript lacks sufficient information, supplement your response with accurate, general knowledge, but ensure the answer is clear, concise, and tailored to the question's context. Avoid unnecessary details or unrelated information. Question: ${currentQuestion}`;
            const prompt = `${transcript} ${questionn}`;
            const aiResponse = await Bard({ prompt });
            // console.log(aiResponse);

            setSummary(aiResponse);
            // console.log(currentQuestion);
            
        } catch (error) {
            setError("Error in handleBard");
            console.log(error);
        }
    }

    generateAi();
}


    const value = {
          url,
          setUrl,
          transcript,
          setTranscript,
          summary,
          setSummary,
          error,
          setError,
          handleBard,
        loading,setLoading
        };

  return <FinalContext.Provider value={value}>{children}</FinalContext.Provider>
}

export default Context;