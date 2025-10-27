const Avatar=({name,age,num,...rest})=>{
  // const{name,age,...rest}=person
  return<>
  <div>Name:{name}</div>
  <div>age:{age}</div>
  <div>ChildNum:{rest.childNum}</div>
  <div>num:{num}</div>

  </>



}
export default Avatar
// const Avatar=({name="ss",age="50",img="....",...rest})=>{
//   // console.log(props)
//   // const {name,age}=props
//   console.log(rest)
// return(
//   <div>
//     <div>Name :{name}</div>
//     <div>Age:{age}</div>
//     <div>Imag:{img}</div>
//     <div>Rest:{rest.status}</div>

//   </div>
// )
// }
// export default Avatar