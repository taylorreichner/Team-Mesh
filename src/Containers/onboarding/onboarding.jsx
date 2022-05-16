import React from 'react';
import '../../style.css'
import '../../Components/button.css'
import '../../Components/roundRect.css'
import './onboarding.css'


import WelcomeImg from '../../assets/onboarding/onboarding-welcome.png'
// import ExploreImg from '../../assets/onboarding/onboarding-explore.png'
// import NotesImg from '../../assets/onboarding/onboarding-notes.png'

const Onboarding = () => {
    return (
        <>

        {/* Slideshow container */}
        <div className="slide-container">

            {/* Welcome Slide */}
            <div className="slide">
                <img src={WelcomeImg} alt="Welcome" className="slide-img" />
                <h2 className="onboarding-title">Welcome to mesh</h2>
                <p className='grey'>Explore design, dev, and PM events to make connections and land your dream role in tech</p>
            </div>

        {/*
            Explore Slide
            <div>
                <img src={ExploreImg} alt="Explore" className="slide-img" />
            </div>

            Notes Slide
            <div>
                <img src={NotesImg} alt="Notes" className="slide-img" />
            </div>
        */}
            
        </div>
        <div className="round-rect rect-white rect-flip"> </div>
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