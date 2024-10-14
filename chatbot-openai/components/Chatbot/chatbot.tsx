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

    const [userMessage, setUserMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {role: 'Komissa', content: 'Konnichiwa, how may I help yout today?'}
    ]);

    const handleSendMessage = async(e: FormEvent) => {
        e.preventDefault();

        console.log('USERMESSAGE', UserMessage)

        if (!userMessage) return;

        // Create new message object
        const newMessage: Message = {role: 'user', content: userMessage};
        
        console.log("NEW MESSAGE", newMessage);

        // Update the message state
        setMessages((prevMessage) => [...prevMessage, newMessage]);
        setLoading(true);

        // Request to OpenAI
        try {
            // copy of messages
            const chatMessages = messages.slice(1);
            console.log("Chat Messages", chatMessages)

            // Call the API
            const res = await chatCompletion([...chatMessages, newMessage]);

            console.log('RESPONSE', res)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <TbMessageChatbot 
            color='pink'
            size={64}
            className='fixed left-2 bottom-[calc(1rem)] hover:cursor-pointer'
            />

    {/* <Image
    src="/images/komissa.jpg"
    alt="Description"
    width={500} 
    height={300} 
    className='justify-center'
  /> */}

                    <div className='flex justify-center h-full items-center '>

                                {/* CHAT CONTAINER */}
                                <div className='flex flex-col p-2 mt-5 overflow-y-auto text-white w-8/12 fixed bottom-16'>
                                  {messages && messages.map((m, i) => {
                                    return m.role === 'Komissa' ? (
                                        <BotMessage {...m} key={i} />
                                    ) : (
                                        <UserMessage {...m} key={i} />
                                    )
                                  })}
                                </div>

                                <ChatInput 
                                    userMessage={UserMessage}
                                    setUserMessage={setUserMessage}
                                    handleSendMessage={handleSendMessage}
                                />
                                {/* MESSAGE INPUT */}

                    </div>
        </>
    )
}

// https://www.youtube.com/watch?v=bx0oryJCpSk - Tutorial pt.2