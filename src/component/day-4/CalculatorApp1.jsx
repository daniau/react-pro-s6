import { useState } from "react"

export default function CalculatorApp1() {
  const [display,setDisplay]=useState("")
  const number=["0","1","2","3","4","5","6","7","8","9"]
  const opration=["+","-","*","/"]
  function handleClick(val){
    setDisplay(display+val)
    console.log(display)
  }
  function calc(){
    setDisplay((prev)=>eval(prev))
  }
  return (
    <div>
      <div>{display||"0"}</div>
      <div>
        {number.map((num)=> <button  onClick={()=>handleClick(num)}>{num}</button>
          
        )}
      </div>
      <div>
        {opration.map((op)=><button onClick={()=>handleClick(op)}>{op}</button>
        )}
      </div>
      <button onClick={calc}>=</button>
    </div>
  )
}