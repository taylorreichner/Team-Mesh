import React from 'react';
import NoteCard from './noteCard';
import './notelistcss.css'

const NoteList = ({ noteEvents }) => {
   
    const eventItems = noteEvents.map(event => (
        <li key={event.id}>
            <NoteCard {...event} />
        </li>
    ))
      
        
    return (
        <ul className='note-list' aria-label="event">
            {eventItems}
        </ul>
    )}

export default NoteList;