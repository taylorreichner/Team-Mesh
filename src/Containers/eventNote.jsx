import React, { useEffect, useState } from 'react';
import { fetchNoteEvents } from '../Services/eventsApi';
import AllEventsWithNotes from '../Components/eventswithnotes/allEventsWithNote';

const EventNote = () => {
    
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetchNoteEvents()
        .then(setEvents)
    }, []);
 
    return (
        <>
        <AllEventsWithNotes events={events} />
        </>
    )

}



export default EventNote;