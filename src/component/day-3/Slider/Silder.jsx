import { useState } from 'react'
import {sculptureList} from './data'
export default function Slider(){
  const[index,setIndex]=useState(0)

  function handleClicke(){
    setIndex(index+1)
    setIndex(index+1)

    console.log(index)
  }

  let sculpture=sculptureList[index]
  return<>
  <button onClick={handleClicke}> click me</button>
  <h2>
    <i>{sculpture.name}</i> by  {sculpture.artist}</h2>
  <h3>{index+1} of {sculptureList.length}</h3>
  <img src={sculpture.url} alt={sculpture.alt} />
  <p>{sculpture.description}</p>
  </>

}