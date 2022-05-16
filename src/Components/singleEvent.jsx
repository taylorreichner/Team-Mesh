import React from 'react';
import '../Components/css/eventCard.css'

const SingleEvent = ({id, title, url, date, host}) => {
   
   return (
   <div>
        <div class="event-card">
            <div class="event-card-info">
                <h3>{title}</h3>
                <p class="grey">{host}</p>
                <p class="grey">{date}</p>
            </div>
            <div class="event-card-icons">
                <div>hi</div>
                <div>hi</div>
            </div>
        </div>
        
    </div>

   )
 
   

}

export default SingleEvent;