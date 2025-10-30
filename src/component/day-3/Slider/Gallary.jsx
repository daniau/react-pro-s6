import { useState } from 'react'
import {sculptureList} from './data'
export default function Gallary(){
  const[index,setIndex]=useState(0)
  const[showMore,setShowMore]=useState(false)


  function handleClicke(){
    setIndex(index+1)
    setIndex(index+1)

    console.log(index)
  }
  function handleShowMore(){
    setShowMore(!showMore)
    console.log(showMore)

  }

  let sculpture=sculptureList[index]
  return<>
  <button onClick={handleClicke}> click me</button>
  <h2>
    <i>{sculpture.name}</i> by  {sculpture.artist}</h2>
  <h3>{index+1} of {sculptureList.length}</h3>
  <img src={sculpture.url} alt={sculpture.alt} />
  
  <button onClick={handleShowMore}>{showMore?"Hide":"show"} detalise</button>
 { showMore&&<p>{sculpture.description}</p>}
  </>

}