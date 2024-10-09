import React, { FormEvent, useState } from 'react';

type ChatProps = {
    userMessage: string;
    setUserMessage: (value: string) => void;
    handleSendMessage: (e: FormEvent) => void;
}

export default function ChatInput({userMessage, setUserMessage, handleSendMessage}: ChatProps) {
    const [message, setMessage] = useState('');

    function sendMessage() {
        if (message) {
            console.log("Message sent:", message); // Replace this with your send logic
            setMessage(''); // Clear the input
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            sendMessage();
        }
    };

    return (
        <div className="flex space-x-2 items-center justify-center mt-auto fixed bottom-5 w-8/12">
            <form className="flex items-center justify-center w-full space-x-2" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                <input 
                    type="text" 
                    placeholder="Type your message here" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown} // Updated to onKeyDown
                    className="flex h-10 w-full rounded-md border border-[#e5e7eeb] px-3 text-sm text-black"
                />
                <button 
                    type="button" // Prevents form submission
                    className="p-2 bg-pink-200 text-black inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </form>
        </div>
    );
}
