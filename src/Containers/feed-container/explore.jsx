import React, { useEffect, useState} from 'react';
import ExploreList from '../../Components/explore-components/exploreList.jsx'
import { fetchEvents } from '../../Services/eventsApi';
import './feed.css'

import ExploreIcon from '../../assets/icons/icon-explore-24.svg'
import NotesIcon from '../../assets/icons/icon-notes-24.svg'

const Explore = () => {
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetchEvents()
        .then(setEvents)
    },[]);
    
   
    return (
        <>
        <h2 className="feed-title">Explore new events</h2>

        <div className="feed-tabs">
            <div className="tab active-tab">
                 <img src={ExploreIcon} alt="Explore Icon" className="Explore" />
                <h4>Explore</h4>
            </div>
            <div className="tab inactive-tab">
                <img src={NotesIcon} alt="Notes Icon" className="Notes" />
                <h4>Notes</h4>
            </div>
        </div>

        <ExploreList events={events}/>

        <div className="rect rect-blue rect-border feed-rect"></div>
        </>
    )
}

export default Explore;