import { pepole } from "./data";
import {getImageUrl} from '../utils/script'
export const List = () => {
  // const filterList=pepole.filter((person)=>{
  //   if(person.profession==="chemist")  return person
   
  // })
  // console.log(filterList)
  return <ul>
    {pepole.map((person)=>
        (person.profession==="chemist") ? <li key={person.id}>
             <div>{person.name}</div>
             <img src={getImageUrl(person)} alt="nothing" />
           </li>:null
      )}  
    </ul>}
  //  <ul>
  //  {pepole.filter((person)=>{
  //   if(person.profession==="chemist")  return person
   
  // }).map(person=>{
  //   return <li key={person.id}>
  //     <div>{person.name}</div>
  //     <img src={getImageUrl(person)} alt="nothing" />
  //   </li>
  //  })}
  //  </ul>
 // )
//}
// export default List