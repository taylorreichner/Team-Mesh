import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../../Services/eventsApi';
import NoteList from '../../Components/note-components/noteList';

const Note = ({userId}) => {
    
    const [events, setEvents] = useState([])
    

    useEffect(() => {
        fetchNotes(userId)
        .then(setEvents)
    }, [userId]);
    
    return (
        <>
        <NoteList events={events} />
        </>
    )
}

export default Note;