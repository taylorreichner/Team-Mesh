import React from 'react';
import '../../style.css'
import './splash.css'
import '../../Components/css/roundRect.css'
import MeshSplash from '../../assets/splash/splash-vector.svg'
import Logo from '../../assets/icon-logo-54.png'

const Splash = () => {
    return (
        <>
            <h1 className="title">mesh</h1>
            <img src={MeshSplash} alt="Mesh Splash" className="splash" />
            <img src={Logo} alt="Mesh Logo" className="logo" />
            <div className="round-rect rect-blue"></div>
        </>
    )
}

export default Splash;