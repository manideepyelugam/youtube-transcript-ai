import { YoutubeTranscript } from 'youtube-transcript';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  


let text = ''; // Declare `text` outside the function

async function fetchTranscriptText(url) {
    const res = await YoutubeTranscript.fetchTranscript(url); // Wait for the transcript
    text = res.map(segment => segment.text).join(' '); // Combine all text into a single string
}

(async () => {
    await fetchTranscriptText('https://www.youtube.com/watch?v=gvb5gI_IOpw'); // Wait for `text` to be set
    // console.log(text); // Use `text` here


  const genAI = new GoogleGenerativeAI("AIzaSyAc4K0L_6hZkSB--0KRp89z12BD2ZMy1JQ");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
      });
  
      const result = await chatSession.sendMessage(prompt);
      console.log(result.response.text());
      return result.response.text();
      
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
  


// console.log(text);

run(`${text}, This is the transcript you have to summarize and give answer to the question and just give the direct in short answers to the question. The question is: for how many people are they doing this?`)
})();



