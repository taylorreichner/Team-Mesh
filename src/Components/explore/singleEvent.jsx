import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eventCard.css'


const SingleEvent = ({id ,title, url, date, host}) => {
   
   

   return (
   <div>
       <Link to={`/${id}`}>
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

export default SingleEvent;