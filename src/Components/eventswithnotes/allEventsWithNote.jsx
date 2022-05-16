import React from 'react';
import SingleEventWithNote from './singleEventWithNote';

const AllEventsWithNotes = ({ events }) => {
   
    const eventItems = events.map(event => (
        <li key={event.id}>
            <SingleEventWithNote {...event} />
        </li>
    ))
      //  console.log(events, 'events')
      //  console.log(eventItems, 'eventitems')
        
    return (
        <ul aria-label="event">
            {eventItems}
            
        </ul>

        
    )}

    

export default AllEventsWithNotes;