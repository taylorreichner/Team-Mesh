import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../../Services/eventsApi';
import AllEventsWithNotes from '../../Components/eventswithnotes/allEventsWithNote'



const EventNote = ({userId}) => {
    const [events, setEvents] = useState([])
    

    useEffect(() => {
        fetchNotes(userId)
        .then(setEvents)
    }, [userId]);
    console.log(userId)
    return (
        <>
         
        <AllEventsWithNotes events={events} />
        </>
    )

}



export default EventNote;