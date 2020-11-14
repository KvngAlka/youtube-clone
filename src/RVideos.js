import { Avatar } from '@material-ui/core';
import React from 'react';
import videoData from './vidoeData'
import './rvideos.css'


function TopCard({option, active}){
    return(
        <div className ={`top__card ${active ? 'top__card__active' : ''}`}>
            <h6>{option}</h6>
        </div>
    )
}
function DisplayVideoFromData(){
    return videoData.map(video =>{
        return(
            <VideoCard 
            name = {video.name}
            thumbnail = {video.thumbnail}
            profilePicUrl = {video.profilePicUrl}
            caption = {video.caption}
            views = {video.views}
            duration = {video.duration}
            days = {video.days}
            />
        )
    })
}

function VideoCard({thumbnail, name, profilePicUrl, caption,views,duration,days}){
    return(
        <div className = "video__card">
            <div className = "img__box">
                <img src = {thumbnail} alt = "" />
                <div className = "time__indicator">
                    {duration}
                </div>
            </div>
            <div className = 'vid__title__and__avatar'>
                <Avatar src = {profilePicUrl}/>
                <div className = "vid__text">
                    <h4>{caption}</h4>
                    <div className = 'vid__username__and__views'>
                        <h5>{name}</h5>
                        <h5>{views} views . {days}  ago</h5>
                    </div>
                </div>
            </div>
            

        </div>
    )
}


const RVideos = () => {
    return (
        <div className = "rvideos">
            <div className = "top">
                <TopCard option = {"all"} active/>
                <TopCard option = {"alka services"}/>
                <TopCard option = {"fictions"}/>
                <TopCard option = {"blaqlenses"}/>
                <TopCard option = {"God can"} />
                <TopCard option = {"hollyWood"}/>
                <TopCard option = {"Godi's Commedy"}/>
                <TopCard option = {"Davine Jay"}/>
                <TopCard option = {"PrettyBoy fredo"}/>
                <TopCard option = {"On God"}/>
                <TopCard option = {"We are who we are"}/>
                <TopCard option = {"She is the man"}/>
                
            </div>

            <div className = "down">

                
                <VideoCard
                    name  = "Davido"
                    caption = "This is the man ft Nicki Minaj"
                    thumbnail = {"https://i.ytimg.com/vi/JtEv_3Rwn1o/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBzGlxvCOBIKBXw3Y2itG01qgemkQ"}
                    profilePicUrl = "https://yt3.ggpht.com/a/AATXAJwPmy36iEEthoUXQu5CJDy6wra9aUuBA3jV6kjX=s88-c-k-c0x00ffffff-no-rj"
                    views = "12K"
                    duration = "2:56"
                    days = "12 hours"
                />

                <DisplayVideoFromData/>
                <DisplayVideoFromData/>
                <DisplayVideoFromData/>

            </div>
            
        </div>
    )
}

export default RVideos
