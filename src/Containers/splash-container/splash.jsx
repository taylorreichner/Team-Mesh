import React from 'react';
import '../../style.css'
import './splash.css'
import '../../Components/css/rect.css'
import MeshSplash from '../../assets/splash/splash-vector.svg'
import Logo from '../../assets/icons/icon-logo-54.png'

const Splash = () => {
    return (
        <>
            <h1 className="title">mesh</h1>
            <img src={MeshSplash} alt="Mesh Splash" className="splash" />
            <img src={Logo} alt="Mesh Logo" className="logo" />
            <div className="rect round-rect rect-blue"></div>
        </>
    )
}

export default Splash;