'use client';
import { FormEvent, useState } from 'react';
import {TbMessageChatbot} from 'react-icons/tb' ;
import BotMessage from './ui/bot-message';
import UserMessage from './ui/user-message';
import ChatInput from './ui/chat-input';
import Image from 'next/image';
import { chatCompletion } from '@/actions';
import { error } from 'console';


export type Message = {
    content: string;
    role: 'user' | 'assistant' | 'system';
}


export default function Chatbot () {

    const [userMessage, setUserMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {role: 'assistant', content: 'Konnichiwa, how may I help yout today?'}
    ]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
    
        if (!userMessage) return;
    
        const newMessage: Message = { role: 'user', content: userMessage };
    
        setMessages((prevMessage) => [...prevMessage, newMessage]);
        setLoading(true);
    
        try {
            const chatMessages = messages.slice(1);
    
            const res = await chatCompletion([...chatMessages, newMessage]);
    
            if (res.error) {
                let customMessage;
    
                // Define custom responses based on the error message or type
                switch (res.message) {
                    default:
                        customMessage = "Gomen'nasai, I cannot help right now! My creator needs to purchase more credits xD";
                }
    
                const assistantMessage: Message = {
                    content: customMessage,
                    role: 'assistant',
                };
                setMessages(prevMessages => [...prevMessages, assistantMessage]);
            } else if (res?.choices && res.choices.length > 0 && res.choices[0]?.message) {
                setUserMessage("");
    
                const assistantMessage: Message = {
                    content: res.choices[0].message.content as string,
                    role: 'assistant',
                };
    
                setMessages(prevMessages => [...prevMessages, assistantMessage]);
            } else {
                // Handle unexpected response structure
                const assistantMessage: Message = {
                    content: "An unexpected error occurred. Please try again.",
                    role: 'assistant',
                };
                setMessages(prevMessages => [...prevMessages, assistantMessage]);
            }
    
        } catch (error) {
            console.error('API ERROR', error);
    
            const assistantMessage: Message = {
                content: "An unexpected error occurred. Please try again.",
                role: 'assistant',
            };
            setMessages(prevMessages => [...prevMessages, assistantMessage]);
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <>
                    <div className='flex justify-center h-full items-center '>

                                {/* CHAT CONTAINER */}
                                <div className='flex flex-col p-2 mt-5 overflow-y-auto text-white w-8/12 fixed bottom-16'>
                                  {messages && messages.map((m, i) => {
                                    const displayName = m.role === 'assistant' ? 'Komissa' : 'User';
                                    return m.role === 'assistant' ? (
                                        <BotMessage {...m} key={i} displayName={displayName} />
                                    ) : (
                                        <UserMessage {...m} key={i} displayName={displayName} />
                                    )
                                  })}
                                </div>

                                <ChatInput 
                                    userMessage={userMessage}
                                    setUserMessage={setUserMessage}
                                    handleSendMessage={handleSendMessage}
                                />
                                {/* MESSAGE INPUT */}

                    </div>
        </>
    )
}