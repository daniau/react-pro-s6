// const Item=({isPacked,name})=>(isPacked?<li className="item">{name} (checked)</li>:<li className="item">{name}</li>)
const Item=({isPacked,name})=>{
  return(isPacked?<li>{name}checked</li>:<li>{name}</li>)

}
export  const PackingList=()=>{
  return(<>
  <Item isPacked={true} name={"Space Suit"}/>
  <Item isPacked={true} name={"Space Suit2"}/>
  <Item isPacked={false} name={"Space Suit3"}/>
  </>)
}
// export const PackingList = () => {
//   return (
//     <>
//     <h1>Sally Ride's Packing List </h1>
//     <Item isPacked={true} name="Space Suit"/>
//     <Item isPacked={true} name="Space Suit2"/>
//     <Item isPacked={false} name="Space Suit3"/>

//     </>
//   )
// }