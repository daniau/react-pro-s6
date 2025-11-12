import { useState } from "react"

export default function FunctionalUpdates() {
  const[number,setNumber]=useState(0)
  return (
    <>
    <h1>{number}</h1>
    <button onClick={()=>{
      setNumber((prev)=>prev+1)
      setNumber((prev)=>prev+1)
      setNumber((prev)=>prev+1)
      setNumber((n)=>n+1)
      setNumber(45)

    }
 

    }>+3</button>
    </>
  )
}