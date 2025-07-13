// AIzaSyA0lO0q8iwmraUEotzY1dS93cG7LBfjmVs

// import { GoogleGenAI } from "@google/genai";

const {GoogleGenAI} = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: "AIzaSyA0lO0q8iwmraUEotzY1dS93cG7LBfjmVs" });

async function main(questions) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: questions,
  });
  console.log(response.text);
  return response.text;
}

exports.main = main;