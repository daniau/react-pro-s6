import { useState } from "react"

export default function NestedObject() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artWork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    }
  })
  function handleName(e) {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }
  function handleArtWork(e){
    setPerson({...person,artWork:{
      ...person.artWork,
      [e.target.name]: e.target.value

    }})

  }
  return (
    <>
      <label >name
        <input type="text" name="name" value={person.name} onChange={handleName} />
      </label>
      <label >title
        <input type="text" name="title"  value={person.artWork.title} onChange={handleArtWork} />
      </label>
      <label >city
        <input type="text" name="city"  value={person.artWork.city} onChange={handleArtWork} />
      </label>
      <label >image
        <input type="text" name="image"  value={person.artWork.image} onChange={handleArtWork} />
      </label>
      <p>{person.name} {person.artWork.title} {person.artWork.city} </p>
      <img src={person.artWork.image}/>

    </>

  )
}