export default function Toolbar1(){
  const play=(event)=>{
    event.stopPropagation()
    alert("Playing")
  }

  const upload=(event)=>{
    event.stopPropagation()

    alert("uploading")
  }
  return <div onClick={()=>alert("click div")}>
    <Button eventHandle={play}>Play</Button>
    <Button eventHandle={upload}>upload</Button>

  </div>
}
function Button({eventHandle,children}){
  return <button onClick={eventHandle}>{children}</button>
}

// export default function Toolbar1(){
//   const play=(event)=>{
//     event.stopPropagation();

//     return alert("Playing")
//   }
//   const upload=(event)=>{
//     event.stopPropagation();
//     return alert("uploading")
//   }
//   return<div onClick={()=>alert("on clike by div")}>
//   <Button onClick={play}>play</Button>
//   <Button onClick={upload}>upload</Button>

//   </div>
// }
// function Button({onClick,children}){
//   return <button onClick={onClick}>{children}</button>
// }