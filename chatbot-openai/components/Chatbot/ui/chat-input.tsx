import { FormEvent } from 'react';

type ChatProps = {
    userMessage: string;
    setUserMessage: (value: string) => void;
    handleSendMessage: (e: FormEvent) => void;
}

export default function ChatInput({userMessage, setUserMessage, handleSendMessage}: 
    ChatProps) {

        const onSubmit = (e: FormEvent) => {
            e.preventDefault(); // Prevent the default form submission behavior
            handleSendMessage(e); // Call the original send message function
            setUserMessage(''); // Clear the input field
        };

    return (
        <div className="flex space-x-2 items-center justify-center mt-auto fixed bottom-5 w-8/12">
            <form 
                onSubmit={onSubmit}
                className="flex items-center justify-center w-full space-x-2"
            >
                <input 
                    type="text" 
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type your message here" 
                    className="flex h-10 w-full rounded-md border border-[#e5e7eeb] px-3 text-sm text-black"
                />
                <button 
                    className="p-2 bg-pink-200 text-black inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
