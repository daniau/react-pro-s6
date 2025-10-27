/*
The CEO of your company is asking you to add “stories” to your online clock app, and you can’t say no. 
You’ve written a StoryTray component that accepts a list of stories, followed by a “Create Story” placeholder.
You implemented the “Create Story” placeholder by pushing one more fake story at the end of the stories array that you receive as a prop. 
But for some reason, “Create Story” appears more than once. Fix the issue.
*/
export default function StoryTray({ stories }) {
  const addStory=[...stories,{
    id: "create",
    label: "Create Story",
  }];

  return (
    <ul>

      {addStory.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <h1>Story</h1>
       {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      
    </ul>
  );
}