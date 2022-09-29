import "./otherUsers.css";
import {useNavigate} from "react-router-dom";


const OtherUsers = ({otherUser, allInfoUser}) => {
    const navigate = useNavigate();
    return (
            <div className='otherUserInfo' onClick={()=> {
                allInfoUser(otherUser);
                navigate(`/user/${otherUser.userID}`)
            }}>
                <img src={otherUser.picture.large} alt="" className='otherUserImg'/>
                <p className='otherUserName'>{otherUser.name.title} {otherUser.name.first} {otherUser.name.last}</p>
            </div>
    )
}

export default OtherUsers
