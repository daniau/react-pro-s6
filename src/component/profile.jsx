import Avatar from "./Avatar"
const persons=[
  {name:"Dania",age:22},
  {name:"Safa",age:21},
  {name:"Nbhan",age:22},

]
export default function Profile(){
  return<>
  {persons.map(person=>(<Avatar {...person} childNum="40" status="single"/>))}
  </>
}


// import Avatar from "./Avatar"
// const persons=[
//   {name:"Dania",age:23},
//   {name:"Safa",age:20},
//   {name:"Mariam",age:24},

// ]
// export default function Profile() {
//   return (
//     <>
//     <div>This is profile</div>
//     {/* {persons.map(person=><Avatar name={person.name} age={person.age}/>)} */}
//     {persons.map(person=><Avatar {...person} childNum="40" status="single"/>)}
//     </>
    
//   )
// }
  
