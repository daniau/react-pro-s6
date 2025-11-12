import { useState } from "react"

export default function SpreadOperator() {
  const[person,setPerson]=useState({firstName:"",
    lastName:"",
    email:""
  })
  function handlePerson(e){
    setPerson({...person,[e.target.name]:e.target.value})
    console.log(person)
  }
  return (
    <form>
      <label >firstName
      <input name="firstName" value={person.firstName} onChange={handlePerson}/>

        {/* <input value={person.firstName}  onChange={(e)=>setPerson({...person,firstName:e.target.value})}/> */}
      </label>
      <label >lastName
        <input name="lastName" value={person.lastName} onChange={handlePerson}/>
      </label>
      <label >email
        <input name="email" value={person.email} onChange={handlePerson} />
      </label>
      <p>{person.firstName} {person.lastName} {person.email}</p>

    </form>
   
  )
}