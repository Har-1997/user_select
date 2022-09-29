import "./listItem.css";
import {useNavigate} from "react-router-dom";
import { BsFillTelephoneFill, BsEnvelopeFill, BsFillPersonFill, BsArrowRightShort } from "react-icons/bs";

const ListItem = ({user, allInfoUser}) => {
    const navigate = useNavigate();
    return (
        <div  className="listUser">
            <img src={user.picture.large} alt="" className="userImg" />
            <div className="infoUserDiv">
                <h3 className="userName">{user.name.title} {user.name.first} {user.name.last}</h3>
                <p className="userPhone"><BsFillTelephoneFill className="iconsCont" /> <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                <p className="userPhone"><BsEnvelopeFill className="iconsCont" /> <a href={`mailto:${user.email}`}>{user.email}</a></p>
            </div>
            <div className="userInfoPageDiv">
                <button type="button" className="allInfoUserBtn" onClick={()=> {
                    allInfoUser(user)
                    navigate(`/user/id=${user.userID}`);
                }
                }>
                    <BsFillPersonFill className="allInfoUserIcon" />
                    <BsArrowRightShort className="arrowIcon" />
                </button>
            </div>
        </div>
    )
}

export default ListItem
