import Chatbot from "@/components/Chatbot/chatbot"

export default function Home() {
  return (
      <main className="min-h-screen bg-black overscroll-none ">
        
        <div className=" flex  flex-col ">

          <div className="flex items-center justify-center p-24"> 
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
