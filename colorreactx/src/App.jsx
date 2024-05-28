import { useState } from "react"


function App() {
  const [color, setColor]= useState("olive")

  return (
   <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
      <div className="bg-white flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl ">
        <button onClick={()=>setColor("Red")} className="outline-none px-4 py-1 rounded-xl text-white" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-xl text-white" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-xl text-white" style={{backgroundColor: "green"}}>Green</button>
        <button onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-xl text-white" style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={()=>setColor("aqua")} className="outline-none px-4 py-1 rounded-xl text-white" style={{backgroundColor: "aqua"}}>Aqua</button>
      </div>
    </div>
   </div>
  )
}

export default App
