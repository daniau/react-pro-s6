function Button({onSmash,children}){
  return <button onClick={onSmash}>{children}</button>
}
export default function NamingEvent(){
  const upload=(event)=>{
    console.log(event)
    alert("Uploding")}
  return <>
  <Button onSmash={()=>alert("Playing")}>Click</Button>
  <Button onSmash={upload}>Click</Button>
  </>
  


}