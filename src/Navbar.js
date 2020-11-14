import React from 'react';
import './navbar.css';
import {FaYoutube} from 'react-icons/fa'
import { MdAccountCircle, MdApps, MdMenu, MdMic, MdNotifications, MdSearch, MdVideocam } from 'react-icons/md';


const Navbar = () => {
    return (
        <nav>
            <div className = "nav__left">
                <MdMenu className = "icon"/>
                <div className = "youtube">
                    <FaYoutube className = "u__icon"/>
                    <h4>Youtube</h4>
                </div>
            </div>

            <div className = "nav__middle">
                <div className = "nav__input">
                    <input type = "text" placeholder = "search"/>
                    <div><MdSearch className = "icon"/></div>
                </div>
                <MdMic className = "icon"/>
            </div>


            <div className = "nav__right">
                <MdVideocam className = "icon"/>
                <MdApps className = "icon"/>
                <MdNotifications className = "icon"/>
                <MdAccountCircle className = "icon"/>
            </div>
        </nav>
    )
}

export default Navbar
