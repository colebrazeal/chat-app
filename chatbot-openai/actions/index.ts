'use server';
import OpenAI from "openai";
import { Message } from "@/components/Chatbot/chatbot";

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function chatCompletion(chatMessages: Message[]) {
    console.log('FROM BACKEND', chatMessages);
    
    const chat = [
        {role: 'system', content: 'You are a helpful assistant'},
        ...chatMessages
    ];

    const completion = await openAi.chat.completions.create({
        messages: chat,
        model: "gpt-3.5-turbo",
    });

    console.log('COMPLETION', completion.choices[0]);
    return completion;
}