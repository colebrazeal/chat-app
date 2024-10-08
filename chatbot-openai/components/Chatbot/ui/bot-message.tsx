import {RiRobot3Line} from 'react-icons/ri'

export default function BotMessage () {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1.5 w-8 h-8 border bg-slate-300 rounded-full mr-2'>
                <RiRobot3Line size={18} />
            </div>

            <div>
                <div className='font-semibold text-md tracking-tight'>Komissa</div>
                <p>Konnichiwa, how can I help you?</p>
            </div>
        </div>
    )
}