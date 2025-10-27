// import Avatar from "./Avatar"


const Card=({name,children})=>{
  return<>
  <div>This is {name} called insid profile</div>
  {children}
  </>

}

export const Profile1 = () => {
  return (
    (<Card name="card">
      <div>This is Children card component</div>
      
    </Card>)
  )
}
 



// const Card = ({name,children}) => {
//   return (
//     <>
//      <div>This is {name} called inside profile</div>
//      {children}
//     </>
   
//   )
// }
// const Profile1=()=>{
//   return(
//     <Card name="Profile Card">
//       <div>This is children card component</div>
//     </Card>
//   )
// }
// export default Profile1
