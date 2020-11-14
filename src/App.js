import React from 'react';
import "./app.css"
import Navbar from './Navbar'
import RVideos from './RVideos';
import Sidebar from './Sidebar'


function App() {
    return (
        <div className = "app">
            {/* navbar */}
            <Navbar/>
            <div className = "app__body">
                {/* sidebar */}
                <Sidebar/>

                <RVideos/>

            </div>
            

            
        </div>
    )
}

export default App
