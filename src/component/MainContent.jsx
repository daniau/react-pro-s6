import PostCard from "./PostCard"
export default function MainContent() {
  const data=[1,2,3,4,5,6,7,8]
  // function getPostCard(item){
  //   console.log("item",item)
  //   return<PostCard/>
  // }
  return  <><div>MainContent
    {data.map((item)=>{
      return <PostCard/>
    })}
</div></> 
   
  
}
