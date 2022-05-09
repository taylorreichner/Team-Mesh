import React from 'react';
import PropTypes from 'prop-types';
import SingleEvent from './singleEvent';

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

    EventList.propTypes = {
        events: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string,
                url: PropTypes.string,
                date: PropTypes.string,
                host: PropTypes.string,
            })
        )
    }

export default EventList;


