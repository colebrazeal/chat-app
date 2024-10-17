import {RiRobot3Line} from 'react-icons/ri';
import { Message } from '../chatbot';


export default function BotMessage ({role, content}: Message ) {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1.5 w-8 h-8 border border-black bg-pink-200 rounded-full mr-2 '>
                <RiRobot3Line size={18} color={'black'}/>
            </div>

            <div>
                <div className='font-semibold text-md tracking-tight text-pink-200'>{role}</div>
                <p>{content}</p>
            </div>
        </div>
    )
}