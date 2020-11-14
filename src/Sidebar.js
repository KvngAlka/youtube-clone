import React from 'react';
import './sidebar.css';
import { MdArrowDropDown, MdHistory, MdHome,  MdMovie,  MdSubscriptions,  MdVideoLabel, MdVideoLibrary, MdWatchLater, MdWhatshot } from 'react-icons/md'

function SidebarCard({Icon, name, active}){
    return(
        <div className = {`sidebar__card ${active ? 'sidebar__card__active' : ''}`}>
            <Icon className = "icon"/>
            <h5>{name}</h5>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <SidebarCard Icon = {MdHome} name = {"Home"} active/>
            <SidebarCard Icon = {MdWhatshot} name = {"Trending"}/>
            <SidebarCard Icon = {MdSubscriptions} name = {"Subscriptions"}/>
            
            <SidebarCard Icon = {MdVideoLibrary} name = {"library"}/>
            <SidebarCard Icon = {MdHistory} name = {"History"}/>
            <SidebarCard Icon = {MdVideoLabel} name = {"Your videos"}/>
            <SidebarCard Icon = {MdMovie} name = {"Your movies"}/>
            <SidebarCard Icon = {MdWatchLater} name = {"Watch later"}/>
            <SidebarCard Icon = {MdArrowDropDown} name = {"Show more"}/>
            
        </div>
    )
}

export default Sidebar;