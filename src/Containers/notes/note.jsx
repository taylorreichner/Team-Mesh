import React, { useEffect, useState } from 'react';
import { fetchNoteEvents } from '../../Services/eventsApi';
import NoteList from '../../Components/note-components/noteList';

const Note = () => {
    
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetchNoteEvents()
        .then(setEvents)
    }, []);
 
    return (
        <>
        <NoteList events={events} />
        </>
    )

}

export default Note;