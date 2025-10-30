// export default function EventPrevent(){
//   const prevent=(e)=>{
//     e.preventDefault()
//      alert("Submitted")

//   }
//   return <form onSubmit={prevent}>
//     <input type="text" />
//     <button>Send</button>
//   </form>
// }
export default function EventPrevent(){
  const prevent5=(event)=>{
    console.log(event)
    event.preventDefault()
    alert("stop")

  }
  return<form onSubmit={ prevent5}>
    <input type="text" />
    <button >send</button>
  </form>
}