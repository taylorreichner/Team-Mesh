import React from 'react';
import { Link } from 'react-router-dom';
import '../eventCard/eventCard.css'


const SingleEventWithNote = ({id ,title, url, date, host, note}) => {
   
   

   return (
   <div>
       <Link to={`/eventnote/${id}`}>
        <div className="event-card">
            <div className="event-card-info">
                <h3>{title}</h3>
                <p className="grey">{host}</p>
                <p className="grey">{date}</p>
                <p className="grey">{url}</p>
                
            </div>
            <div className="event-card-icons">
                <div>hi</div>
                <div>hi</div>
            </div>
        </div>
        </Link>
    </div>

   )
 
   

}

export default SingleEventWithNote;