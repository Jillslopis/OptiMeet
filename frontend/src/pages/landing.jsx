import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {

    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>
                        OptiMeet <i className="fa fa-video-camera videoIcon" aria-hidden="true"></i>
                    </h2>
                </div>

                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")
                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                <h1><span style={{ color: "#FF9839" }}>Feel</span> close, no matter the miles</h1>

                    <p>Cover a distance by OptiMeet</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                {/* <div>
                    <img src="/mobile.png" alt="" />
                </div> */}
            </div>
            <footer className='founderFooter'>
  <h4><i class="fa fa-copyright" aria-hidden="true"></i>Jills Lopis</h4>
</footer>

        </div>
    )
}
