//When you press “Next” on the last sculpture, the code crashes.
// Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.
// After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.
import { useState } from "react";
import { sculptureList } from "../component/day-3/Slider/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if((index) ===sculptureList.length-1) {
     
     return
      }
      setIndex(index + 1);
     

   
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handlePrevouisClick(){
    if(index===0) return
    setIndex(index-1)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePrevouisClick}>“Previous”</button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}