// import { useState } from "react"

import { useState } from "react"

export default function ReRender() {
  const[isSent,setSent]=useState(false)
  const[message,setMessage]=useState("Hi")
  function savedMessage(e){
    setMessage(e.target.value)
    console.log(message)
  }
  // if(isSent){
  //   return <h1>Message is sent</h1>
  // }
  return (
   <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setSent(true)

    }}>
      <input placeholder="Message"
      value={message}
      onChange={savedMessage}
       />
      <button type="submit">Submit</button>
    </form>
    {isSent&&<h1>Message is sent</h1>}
   </>
  )
}
// export default function ReRender() {
//   const[isSent,setIsSent]=useState(false)
//   const[message,setMessage]=useState("Hi")
//   let h=5
//   function savedMessage(e){
//     setMessage(e.target.value)

//     console.log(message)

//   }
//   // if(isSent){
//   //   return <h1>message is sent</h1>
//   // }
//   return (
    
//     <form onSubmit={(e)=>{
      
//       e.preventDefault()
//       setIsSent(true)
//       // alert("message is sent")
//     }}>
//       <h1>{h}</h1>
//       <textarea value={message} onChange={savedMessage}></textarea>
//       <button type="submit">submit</button>
      
//       {isSent&&<h1>message is sent</h1>}
//     </form>
   
//   )
// }