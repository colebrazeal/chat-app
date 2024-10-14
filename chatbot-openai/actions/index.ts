'use server';
import OpenAI from "openai";
import { Message } from "@/components/Chatbot/chatbot";



export async function chatCompletion(chatMessages: Message[]) {
    console.log('FROM BACKEND', chatMessages);
    
}