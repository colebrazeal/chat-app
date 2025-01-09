import Chatbot from "@/components/Chatbot/chatbot"
import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen bg-black overscroll-none ">

            <div className="flex items-center justify-center pt-12">
              <div className='flex justify-center items-center p-1.5 w-12 h-12 border border-black bg-pink-200 rounded-full mr-2 relative overflow-hidden'>
                  <Image
                      src="./images/komissa.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="transform scale-125"
                  />
              </div>
            </div>
        
        <div className=" flex  flex-col ">

          <div className="flex items-center justify-center pb-12"> 
            <h1 className="text-white items-center justify-center text-xl">
            <b className="text-pink-200 ">Komissa</b> chatbot with <b className="text-pink-200">OpenAI</b></h1>
          </div>

          <div className="bottom-5">
            <Chatbot />
          </div>

        </div>


      </main>
  );
}
