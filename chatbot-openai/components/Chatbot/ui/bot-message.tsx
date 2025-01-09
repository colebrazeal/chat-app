import {RiRobot3Line} from 'react-icons/ri';
import { Message } from '../chatbot';
import Image from 'next/image';


export default function BotMessage ({ content, displayName}: Message ) {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center items-center p-4 w-8 h-8 border border-black bg-pink-200 rounded-full mr-2 relative overflow-hidden'>
                <Image
                    src="/images/komissa.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="transform scale-125" 
                />
            </div>




            <div>
                <div className='font-semibold text-md tracking-tight text-pink-200'>{displayName}</div>
                <p>{content}</p>
            </div>
        </div>
    )
}