import React from "react"
import Input from "../input";
import Square from "../square";
import { useState } from 'react'
function App(){
  const [colour ,setColour]=useState('')
  const [toogColour,setToogColour]=useState("white")
  
  return(
    <div>
      <Input
      colour={colour}
      setColour={setColour}
      toogColour={toogColour}
      setToogColour={setToogColour}
      
      /> 
      <Square 
      colour={colour}
      setColour={setColour}
      toogColour={toogColour}
      setToogColour={setToogColour}
      />
        
    </div>
    
  );
}
export default App;