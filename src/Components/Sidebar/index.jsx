import "./index.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Lightbulb } from "@mui/icons-material";

const Sidebar = ({lightIsOn, setLightIsOn}) => {
const hideSideBar=()=>{

}

  return (
    <aside id="sidebar">
        
        
        {/* user icon */}
      
        {/* user name */}
        {/* 4 buttons */}
        {/* <button>Login/Create</button> */}
        <Lightbulb className={`${lightIsOn ? "color-yellow" : ""}`} />
    <button>
        <AccountBoxIcon />
   Akshat
        </button>
        <Link to="/new">
            <button>New Book</button>
        </Link>

        
        <Link to="library">
            <button>View Books</button>
        </Link>
        

        <Link to="/">
        <button>Light Switch</button>
        </Link>
        
    </aside>
  )
}

export default Sidebar