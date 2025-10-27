import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/footer'
import SideNav from './component/SideNav'
import MainContent from './component/MainContent'
import ToDo from './component/ToDo'
import Profile from './component/profile'
import ProfileEX1 from './EX/ProfileEX1.JSX'
import { PackingList } from './component/PackingList'
import {Profile1} from './profile/Profile1'
import RecipeList from './EX/EX2'
import {List} from './filterd-list/List'
// import StoryTray from'./EX/EX3'


function App() {
  const [count, setCount] = useState(0)
 
 
  return (
    <>
    <List/>
    {/* <StoryTray/> */}
    <RecipeList/>
        {/* <PackingList/> */}

     {/* <Profile1/>
    <Profile/>
    <ProfileEX1/>  
    <ToDo/>
    <section>This is section component</section>
    <Header/>
    <Footer/>
    <SideNav/>
    <MainContent/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
