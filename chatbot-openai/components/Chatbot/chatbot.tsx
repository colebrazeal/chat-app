'use client';
import { useState } from 'react';
import {TbMessageChatbot} from 'react-icons/tb' ;
import BotMessage from './ui/bot-message';
import UserMessage from './ui/user-message';
import ChatInput from './ui/chat-input';
// import Image from 'next/image';


export default function Chatbot () {
    const [showChat, setShowChat] = useState(false);
    return (
        <>
            <TbMessageChatbot 
            size={64}
            onClick={() => setShowChat(!showChat)}
            className='fixed right-8 bottom-[calc(1rem)] hover:cursor-pointer'
            />
            {/* <Image
        src="/assets/images/komissa.jpg" 
        alt="Komissa"
        width={500} 
        height={300} 
      /> */}


            {showChat && (
                <div className='fixed right-8 bottom-[calc(4rem+1.5rem)] hover:cursor-pointer p-5 shadow-md shadow-black h-[474px] w-[500px] rounded-lg bg-slate-300 border border-black'>
                    <div className='flex flex-col h-full'>

                            {/* {CHAT HEADER} */}
                                <div>
                                    <h2 className='font-semibold text-lg tracking-tight'>Komissa</h2>
                                    <p>Powered by OpenAI</p>
                                </div>

                                {/* CHAT CONTAINER */}
                                <div className='flex flex-col flex-1 items-center p-2 mt-5 overflow-y-auto'>
                                    <BotMessage />
                                    <UserMessage />
                                </div>

                                {/* MESSAGE INPUT */}
                                <ChatInput />

                    </div>
                </div>
            )
            
            }
        </>
    )
}