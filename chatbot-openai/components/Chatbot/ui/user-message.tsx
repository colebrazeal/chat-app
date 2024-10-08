import {CiUser} from 'react-icons/ci'

export default function UserMessage () {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1.5 w-8 h-8 border bg-slate-300 rounded-full mr-2'>
                <CiUser size={18} />
            </div>

            <div>
                <div className='font-semibold text-md tracking-tight'>User</div>
                <p>I need assistance with...</p>
            </div>
        </div>
    )
}