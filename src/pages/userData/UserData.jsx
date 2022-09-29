import './userData.css';
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import React from 'react';
import OtherUsers from "../../components/otherUsers/OtherUsers"
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const UserData = ({allInfo, users, allInfoUser}) => {

    const userFilter = users.map((otherUser, i)=> {
        if (otherUser.userID !== allInfo.userID && allInfo!== undefined) {
            return(
                <OtherUsers key={i} otherUser={otherUser} allInfoUser={allInfoUser} />
            );
        }
        return undefined;
    });

    let otherUsers = [];
    userFilter.forEach((user, i)=> {
        if (otherUsers.length < 3 && user !==undefined) {
            otherUsers.push(user);
        }
    })


    return (
        <div className='userData'>
            <Header />
            <div className='userAllInfo'>
                <div className='photoDiv'>
                    <img src={allInfo.picture.large} alt="" className='imgUser' />
                </div>
                <div className="infoDiv">
                    <h1 className="userName">{allInfo.name.title} {allInfo.name.first} {allInfo.name.last}</h1>
                    <div className='continfoDiv'>
                        <h3 className='contText'>Contacts</h3>
                        <h4 className="userPhone"><BsFillTelephoneFill className="iconsCont" /> <a className='contLink' href={`tel:${allInfo.phone}`}>{allInfo.phone}</a></h4>
                        <h4 className="userPhone"><BsEnvelopeFill className="iconsCont" /> <a className='contLink' href={`mailto:${allInfo.email}`}>{allInfo.email}</a></h4>
                    </div>
                    <h3>All Info</h3>
                    <div className='otherInfoDiv'>
                        <div className='InfoLine'>
                            <b className='titleB'>City :</b>
                            <span className='infoSpan'>{allInfo.location.city}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Country :</b>
                            <span className='infoSpan'>{allInfo.location.country}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Post code :</b>
                            <span className='infoSpan'>{allInfo.location.postcode}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>State :</b>
                            <span className='infoSpan'>{allInfo.location.state}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Street :</b>
                            <span className='infoSpan'>{allInfo.location.street.name} {allInfo.location.street.number}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>gender :</b>
                            <span className='infoSpan'>{allInfo.gender}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Age :</b>
                            <span className='infoSpan'>{allInfo.registered.age}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Birthday :</b>
                            <span className='infoSpan'>{allInfo.registered.date}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>dob :</b>
                            <span className='infoSpan'>{allInfo.dob.age}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Dob age :</b>
                            <span className='infoSpan'>{allInfo.dob.date}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Nat :</b>
                            <span className='infoSpan'>{allInfo.nat}</span>
                        </div>
                        <div className='InfoLine'>
                            <b className='titleB'>Cell :</b>
                            <span className='infoSpan'>{allInfo.cell}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slideUsers'>
                <div className='users'>
                    {otherUsers}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserData
