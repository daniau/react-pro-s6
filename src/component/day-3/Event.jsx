
export default function ToolBar(){
  
  return <>
  <AlertButton message="Alert 1" label="button1"> </AlertButton>
  <AlertButton message="Alert 2" label="button2"> </AlertButton>

  </>
}
function AlertButton({message,label}){
  const call=()=>alert(message)
  return<button onClick={call}>{label}</button>
}
// function AlertButton({message,children}){
//   console.log(message)
//   return <button onClick={()=>alert(message)}> {children}</button>
// }
// export default function ToolBar(){

//   return (<>
//   <AlertButton message="Alert button" label="">button 1</AlertButton>
//   <AlertButton message="Alert button" label="">button 2</AlertButton>
//   </>)
// }


// export default function Button(){
//   const message=(event)=> {alert("hi")
//      console.log(event)}
//   return <button onClick={(event)=>message(event)}>Click me</button>
// }



// export default function Button(){
//   const alertMessage=(even)=>{
//     console.log(even)
//     alert("you clicked me!")}
//   return <button onClick={(even)=>alertMessage(even,"you clicked me!")}>Click me</button>
// }