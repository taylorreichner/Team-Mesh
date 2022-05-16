import React, { useEffect, useState} from 'react';
import ExploreList from '../../Components/explore-components/exploreList.jsx'
import { fetchEvents } from '../../Services/eventsApi';

const Explore = () => {
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetchEvents()
        .then(setEvents)
    },[]);
    
   // console.log(events, 'FEED')
    return (
        <>
        <ExploreList events={events}/>
        <h1>feed</h1>
        </>
    )

}

export default Explore;