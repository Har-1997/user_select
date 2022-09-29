import "./header.css";
import {useNavigate} from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();

    return (
        <div className='header'>
            <div className="centerText">
                <span onClick={()=> navigate("/")} className="userText">User List</span>
            </div>
        </div>
    )
}

export default Header
