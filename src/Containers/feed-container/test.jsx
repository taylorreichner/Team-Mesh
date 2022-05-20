import React, { useEffect, useState} from 'react';
import ExploreList from '../../Components/explore-components/exploreList.jsx'
import { fetchEvents } from '../../Services/eventsApi';
import './feed.css'
import NoteList from '../../Components/note-components/noteList'
import ExploreIcon from '../../assets/icons/icon-explore-24.svg'
import NotesIcon from '../../assets/icons/icon-notes-24.svg'
import { fetchNotes } from '../../Services/eventsApi';
import { render } from '@testing-library/react';


const Test = ({userId}) => {
    const [events, setEvents] = useState([])
    const [noteEvents, setNoteEvents] = useState([])
    const [exploreOrNotes, setExploreOrNotes] = useState(true)
    
    useEffect(() => {
        fetchEvents()
        .then(setEvents)
        fetchNotes(userId)
        .then(setNoteEvents)
    },[userId]);

    const handleNotesClick = () => {
        setExploreOrNotes(false)
    }
    
    
        

    return (
        <>
        
        <ExploreList events={events}/>
        <NoteList noteEvents={noteEvents}/>
        </>
    )
    
}

export default Test;