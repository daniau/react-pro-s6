const person={
  name:"Dania",
  thems:{
    backgroundColor:"black",
    color:"White"
  }
}

 const ToDo=()=>{
  const {name:personName,thems}=person
  return (<div style={thems}>
    <h1>{personName}</h1>
    <ul>
      <li>List Item 1</li>
      <li>List Item 1</li>
      <li>List Item 1</li>

    </ul>
  </div>)
}
export default ToDo


// const person={
//   name:"Dania Muin Ubeid",
//   thems:{
//     backgroundColor:"red",
//     color:"White"
//   }
// }
// export default  function ToDo(){
//   const {name:personName,thems}=person

//   return(
//     <>
//     <div style={thems}>
//       <h1>{personName}</h1>
//       <img src="https://sl.bing.net/gMVbCzCxlka" alt="nothing" srcset="" />
//       <ul>
//         <li>List item 1</li>
//         <li>List item 2</li>
//         <li>List item 3</li>

//       </ul>
//     </div>
//     </>
//   )
// }
