import { useState } from "react"

export default function UpdateObject() {
  const[postion,setPosition]=useState({x:0,y:0})

  return (
    <div style={{
      postion:"relative",
      width:"100vw",
      height:"100vh"
    }} onPointerMove={(e)=>{
      const newPositon={x:e.clientX,y:e.clientY}
      setPosition(newPositon)
    }}>
      <div style={{
      postion:"absolute",
      backgroundColor:"red",
      borderRadius:"50%",
      left:-10,
      top:-10,
      width:20,
      height:20,
      transform:`translate(${postion.x}px,${postion.y}px)`
    }}></div>
    </div>
    
  )
}