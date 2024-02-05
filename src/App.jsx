import { useState } from "react" 

function App() {
  const [color, setColor] = useState("black")

  return (
     <div className="w-full h-screen duration-200"
     style={{backgroundColor : color}}>

      <div className="fixed flex flex-wrap 
      justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-4 py-3 riunded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "red"}}>Red</button>

         <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "green"}}>green</button>

         <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "pink"}}>Pink</button>

        <button 
          onClick={() => setColor("navy")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "navy"}}>Navy</button>

        <button 
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "grey"}}>Grey</button>

        <button 
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "lavender"}}>Lavender</button>
        </div>
        </div>


     </div>
  )
}

export default App
