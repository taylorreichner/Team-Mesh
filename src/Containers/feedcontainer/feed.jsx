import React, { useEffect, useState} from 'react';
import EventList from '../../Components/explore/allEvents.jsx'
import { fetchEvents } from '../../Services/eventsApi';


const Feed = () => {
    const [events, setEvents] = useState([])

    
    useEffect(() => {
   
        fetchEvents()
        .then(setEvents)
    },[]);
    
    
    
   // console.log(events, 'FEED')
    return (
        <>
        <EventList events={events}/>
        <h1>feed</h1>
        </>
    )

}



export default Feed;