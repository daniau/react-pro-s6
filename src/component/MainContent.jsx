import PostCard from "./PostCard"
export default function MainContent() {
  const data=[1,2,3,4,5,6,7,8]
  // function getPostCard(item){
  //   console.log("item",item)
  //   return<PostCard/>
  // }
 const colores=["red","yellow"]
 const[f="green",s="blue"]=colores
 console.log(f,s)
 const o={name:"Dania",age:22}
 const{name:f1="safa",age:s1="25"}=o
 console.log(f1,s1)
 const c=["red","blue","yellow","green"]
 const[first,second,...restColers]=c
 console.log(first,second,restColers)
 const user={name:"Dania",
  address:{
    city:"Gaza",
    country:{name:"Palestine",
      code:"PS"
    }
  }
 }
 const{address:{country:{name:NameCountry}}}=user
 console.log(NameCountry)
  return  <><div>MainContent
    {data.map((item)=>{
      return <PostCard/>
    })}
</div></> 
   
  
}
