import "./index.css"
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useState } from "react";

const LightSwitch = ({lightIsOn, setLightIsOn}) => {

  return (
    <div className='page-container'>
      <LightbulbIcon className={`light-icon ${lightIsOn ? "color-yellow" : ""}`}/>
     <button onClick={()=>setLightIsOn(!lightIsOn)}>Change the light!</button>
    </div>
  )
}

export default LightSwitch