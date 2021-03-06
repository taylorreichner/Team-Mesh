import React from 'react';
import ExploreCard from './exploreCard'
import './exploreList.css'

const ExploreList = ({ events }) => {
   
    const exploreItems = events.map(event => (
        <li key={event.id}>
            <ExploreCard {...event} />
        </li>
    ))
      //  console.log(events, 'events')
      //  console.log(eventItems, 'eventitems')
        
    return (
        <ul className='explore-list' aria-label="event">
            {exploreItems}
        </ul>
    )}

export default ExploreList;


