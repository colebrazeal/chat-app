'use server';
import OpenAI from "openai";
import { Message } from "@/components/Chatbot/chatbot";

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export const chatCompletion = async (messages: Message[]) => {
    try {
      const chatMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        name: msg.name || undefined,  // Optional name field
      }));
  
      const res = await openAi.chat.completions.create({
        messages: chatMessages,
        model: "gpt-3.5-turbo",
      });
  
      return res;
    } catch (error) {
      console.error("Error in chatCompletion:", error);
      throw error;
    }
  };
  
