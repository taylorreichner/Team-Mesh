import React, { useEffect, useState} from 'react';
import EventList from '../Components/allEvents';
import { fetchEvents } from '../Services/eventsApi';

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
        </>
    )

}



export default Feed;