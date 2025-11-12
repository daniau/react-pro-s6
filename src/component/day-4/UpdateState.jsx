// import { useState } from "react"

import { useState } from "react"



// export default function Counter() {
//   const [number,setNumber]=useState(0)
//   return (
//     <>
//     <h1>{number}</h1>
//     <button onClick={()=>{
//       setNumber(number+1)
//       setNumber(number+1)
//       setNumber(number+1)}}>+3</button>
//     </>
//   )
// }

// import { useState } from "react"

// export default function Counter() {
//   const [number,setNumber]=useState(0)
//   return (
//     <>
//     <h1>{number}</h1>
//     <button onClick={()=>{
//       setNumber(number+5)
//       alert(number)}}>+5</button>
//     </>
//   )
// }

// import { useState } from "react"

export default function Counter() {
  const [number,setNumber]=useState(0)
  return (
    <>
    <h1>{number}</h1>
    <button onClick={()=>{
      setNumber(number+5)
      setTimeout(()=>alert(number),3000)}}>+5</button>
    </>
  )
}

// import { useState } from "react"
// export default function Counter() {
//   const[to,setTo]=useState("Alice")
//   const[message,setMessage]=useState("Hello")
//   function handleSubmit(e){
//     e.preventDefault()
//     alert(`You said ${message} to ${to}`)

//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <select value={to} onChange={(e)=>setTo(e.target.value)}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>

//       </select>
//       <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
//       <button type="submit">Submit</button>

//     </form>
//   )
// }
// export default function UpdateState() {
//   const[to,setTo]=useState("Alice")
//   const[message,setMessage]=useState("Hello")
//   function handleSubmit(e){
//    e.preventDefault()
//    alert(`you said ${message} to ${to}`)

//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea value={message} onChange={(e)=>{
//         setMessage(e.target.value)

//       }}></textarea>
//       <select value={to} onChange={(e)=>{
//         setTo(e.target.value)
//       }}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//       </select>
//       <button type="submit">submit</button>

//     </form>
//   )
// }