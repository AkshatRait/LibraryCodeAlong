import './App.css'
import './index.css'
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import {Routes, Route} from "react-router-dom"
import LightSwitch from './Pages/LightSwitch'
import NewBookPage from './Pages/NewBook'
import Library from './Pages/Library'
import SingleBook from './Pages/Singlebook'


function App() {
  const [lightIsOn,setLightIsOn] = useState(true);
  const [books,setBooks] = useState([]);

  return (
    <div id="app-container">
    <Sidebar lightIsOn={lightIsOn} setLightIsOn={setLightIsOn}/>
    <Routes>
    <Route path="/" element = {<LightSwitch lightIsOn={lightIsOn} setLightIsOn={setLightIsOn}/>}/>
    <Route path="/new" element = {<NewBookPage books={books} setBooks={setBooks}/>}/>
    <Route path="/library" element = {<Library  books={books}/>}/>
    <Route path="/single_book" element = {<SingleBook books={books}/>}/>

    </Routes>
    </div>
  )
}

export default App
