import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#170404]">
      <div className="text-center">
        <h1 className="text-white font-semibold text-4xl font-mono">
          Mythical Match
        </h1>
        <button className="font-mono border-2 border-white text-white p-2 w-28 mt-4 hover:bg-[#020000] hover:shadow-white hover:shadow hover:mt-3">
          New Game
        </button>
        
        <div className="grid md:grid-cols-4 mt-5 gap-2">
          <div className="border-white border-2 w-40 h-40 rounded">
           
          </div>
          <div className="border-white border-2 w-40 h-40 rounded">2</div>
          <div className="border-white border-2 w-40 h-40 rounded">3</div>
          <div className="border-white border-2 w-40 h-40 rounded">4</div>
          <div className="border-white border-2 w-40 h-40 rounded">5</div>
          <div className="border-white border-2 w-40 h-40 rounded">6</div>
          <div className="border-white border-2 w-40 h-40 rounded">7</div>
          <div className="border-white border-2 w-40 h-40 rounded">8</div>
          <div className="border-white border-2 w-40 h-40 rounded">9</div>
          <div className="border-white border-2 w-40 h-40 rounded">10</div>
          <div className="border-white border-2 w-40 h-40 rounded">11</div>
          <div className="border-white border-2 w-40 h-40 rounded">12</div>
        </div>
      </div>
    </main>
  );
}
