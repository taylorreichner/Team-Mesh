import React from 'react';
import '../../style.css'
import '../../Components/css/button.css'
import '../../Components/css/backButton.css'
import '../../Components/css/rect.css'
import '../../Components/css/navDots.css'
import './onboarding.css'

import WelcomeImg from '../../assets/onboarding/onboarding-welcome.png'
// import ExploreImg from '../../assets/onboarding/onboarding-explore.png'
// import NotesImg from '../../assets/onboarding/onboarding-notes.png'
import BackButton from '../../assets/icons/icon-back-24.svg'

const Onboarding = () => {
    return (
        <>
        <img src={BackButton} alt="Back Button" className='back-button' />

        {/* Slideshow container */}
        <div className="slide-container">

            {/* Welcome Slide */}
            <div className="slide">
                <img src={WelcomeImg} alt="Welcome" className="slide-img" />
                <h2 className="onboarding-title">Welcome to mesh</h2>
                <p className='grey'>Explore design, dev, and PM events to make connections and land your dream role in tech</p>
            </div>

        
            {/* Explore Slide */}
            {/* <div className="slide">
                <img src={ExploreImg} alt="Explore" className="slide-img" />
                <h2 className="onboarding-title">Explore events</h2>
                <p className='grey'>Mesh curates online developer, designer, and product manager events fit for your needs</p>
            </div> */}

            {/* Notes Slide */}
            {/* <div className="slide">
                <img src={NotesImg} alt="Notes" className="slide-img" />
                <h2 className="onboarding-title">Take notes</h2>
                <p className='grey'>Keep track of what you learn and who you meet at industry events</p>
            </div> */}
       
            
        </div>
        <nav className="onboarding-dots">
            <div class="dash"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </nav>
        <div className="rect round-rect rect-white rect-flip"> </div>
        <div className="skip-button">
            <h4>Skip</h4>
        </div>
        <div className="button button-primary next-button ">
            <h4>Next</h4>
        </div>
        <div className="background"></div>
        </>
    )
}

export default Onboarding;