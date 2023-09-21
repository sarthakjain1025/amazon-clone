import React from 'react'
import "./Home.css";
import pic from './images/home.png'
function Home() {
  return (
    <div className='home'>
        <div className="home_container">
        <img className="home_image" src={pic} alt="img"/>
        </div>
    </div>
  )
}

export default Home
