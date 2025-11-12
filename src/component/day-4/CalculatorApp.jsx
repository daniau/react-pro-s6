import { useState } from "react"

export default function CalculatorApp() {
  const[num,setNum]=useState({
   num1:"",
   num2:"",
   result:""
  })
  function handleChange(e){
    setNum({...num,[e.target.name]:e.target.value})
    console.log(num)

  }
  const {num1,num2}=num
  console.log(num1,num2)
  function add(){
    setNum({...num,result:((+num1)+(+num2))})
   


   
  }
  function sub(){
    setNum({...num,result:((+num1)-(+num2))})

  }
  function mul(){
    setNum({...num,result:((+num1)*(+num2))})

  }
  function division(){
    setNum({...num,result:((+num1)/(+num2))})

  }
  return (
    <>
    <input type="number" name="num1" value={num.num1} onChange={handleChange}/>
    <input type="number" name="num2" value={num.num2} onChange={handleChange}/>
    <button onClick={add}>Add</button>
    <button onClick={sub}>sub</button>
    <button onClick={mul}>mul</button>
    <button onClick={division}>division</button>
    <p> {num.result}</p>



    </>
  )
}