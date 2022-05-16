import React from 'react';
import NoteCard from './noteCard';

const NoteList = ({ events }) => {
   
    const eventItems = events.map(event => (
        <li key={event.id}>
            <NoteCard {...event} />
        </li>
    ))
      //  console.log(events, 'events')
      //  console.log(eventItems, 'eventitems')
        
    return (
        <ul aria-label="event">
            {eventItems}
        </ul>
    )}

export default NoteList;