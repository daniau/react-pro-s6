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

import NamingEvent from './component/day-3/NamingEvent'
import Toolbar1 from './component/day-3/EventPropagation'
import EventPrevent from './component/day-3/EventPrevent'
import LightSwitch from './EX/EX4'

import InlineStyle from './component/day-3/inlineStyle'
import Ex5 from "./EX/EX5";
import CssStyle1 from "./component/day-3/CssModule"
import ToolBar from './component/day-3/Event'
import Toolbar from './component/day-3/EventsProps'
// import Gallary from './EX/EX6'
import Form from './EX/EX7'
import ReRender from './component/day-4/ReRender'
import Counter from './component/day-4/UpdateState'
import FunctionalUpdates from './component/day-4/FunctionalUpdates'
import TrafficLight from "./EX/EX8"
import UpdateState from './component/day-4/UpdateState'
import RequestTracker from "./EX/EX9"
import UpdateObject from "./component/day-4/UpdateObject"
import SpreadOperator from"./component/day-4/SpreadOperator"
import CalculatorApp from './component/day-4/CalculatorApp'
import NestedObject from "./component/day-4/NestedObject"
import CalculatorApp1 from "./component/day-4/CalculatorApp1"
function App() {
  const [count, setCount] = useState(0)
 
 
  return (
    <>
    <CalculatorApp1/>
    <NestedObject/>
    <CalculatorApp/>
    {/* <SpreadOperator/> */}
    {/* <UpdateObject/> */}
    {/* <RequestTracker/> */}
    {/* <FunctionalUpdates/> */}
    {/* <Counter/> */}
  {/* <TrafficLight/>
    <FunctionalUpdates/>
    <Counter/>   */}
    {/* <ReRender/> */}
    {/* <Gallary/> */}
    {/* <Button/> */}
    {/* <CssStyle1/> */}
    {/* <InlineStyle/>
    <Ex5/>
    <LightSwitch/>
    <EventPrevent/>
    <Toolbar1/> */}
    {/* <NamingEvent/> */}
    {/* <Toolbar/>
    <List/> */}
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
