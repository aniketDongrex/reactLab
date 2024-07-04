import { useState, useCallback } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowd, setNumAllowd] = useState(false)
  const [charAllowd, setCharAllowd] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowd) str += "0123456789"
    if(charAllowd) str += "!@#$%^&*()_+`~"
    
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass= str.charAt(char)
      
    }

    setPassword(pass)
  },[length, numAllowd, charAllowd, setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center my-3 text-xl font-bold'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='password' 
        readOnly  />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
     </div>
    </>
  )
}

export default App
