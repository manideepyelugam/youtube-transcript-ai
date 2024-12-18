import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const Bard = async ({ prompt }) => {
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

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    // Correctly access the response text
    // console.log("AI Response:", result.response.text()); // Debug the response
    return result.response.text(); // Ensure this returns the proper string
  } catch (error) {
    console.error("Error sending message:", error);
    throw error; // Propagate error for better debugging
  }
};

export default Bard;
