function Button({onClick,children}){
  return <button onClick={onClick}>{children}</button>

}
function PlayButton({movieName}){
  const alertMovie=(event)=>{
    console.log(event)
    alert(`Played ${movieName}`)} 
  return <Button onClick={alertMovie}>Play {movieName}</Button>
}

export default function Toolbar(){
  return <PlayButton movieName="mm"/>
    {/* <UploadButton/> */}
}
// function Button({onClick,children}){
//   return <button onClick={onClick}>{children}</button>
// }
// function PlayButton({movieName}){
//   const alertMovie=()=>alert(`Played ${movieName}`)
//   return <Button onClick={alertMovie}> {movieName} </Button>
// }
// export default function ToolBar(){
//   return <PlayButton movieName="frie"/>
// }