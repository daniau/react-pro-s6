//Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
const Card=({name,children})=>
  (
    <div className="card">
      <div className="card-content">
   <h1>{name}</h1>
   {children}
    </div>
    </div>
  )

function ProfileEX1() {
  return (
    <>
     <Card name="Photo">
      <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
      
    </Card>
    <Card name="About">
    <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis.
          </p>
    </Card>
    </>
    
   
    
  )
  
}
export default ProfileEX1