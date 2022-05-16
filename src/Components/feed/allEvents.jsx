import React from 'react';
import SingleEvent from './singleEvent'

const EventList = ({ events }) => {
   
    const eventItems = events.map(event => (
        <li key={event.id}>
            <SingleEvent {...event} />
        </li>
    ))
      //  console.log(events, 'events')
      //  console.log(eventItems, 'eventitems')
        
    return (
        <ul aria-label="event">
            {eventItems}
            
        </ul>

        
    )}

    

export default EventList;


