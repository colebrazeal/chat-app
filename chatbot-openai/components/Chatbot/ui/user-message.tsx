import {CiUser} from 'react-icons/ci';
import {Message} from '../chatbot';

export default function UserMessage ({role, content}: Message[]) {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1.5 w-8 h-8 border bg-slate-300 rounded-full mr-2'>
                <CiUser size={18} />
            </div>

            <div>
                <div className='font-semibold text-md tracking-tight'>{role}</div>
                <p>{content}</p>
            </div>
        </div>
    )
}