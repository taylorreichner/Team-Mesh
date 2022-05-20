import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eventCard.css'

import EditIcon from '../../assets/icons/icon-edit-24.svg'
import NotesIcon from '../../assets/icons/icon-notes-24-grey.svg'

const ExploreCard = ({id ,title, url, date, host}) => {
   

    const handleUrl = (e) => {
        e.preventDefault(e);
        window.location.replace(url)
    }
    // <img src={NotesIcon} alt="Notes Icon"/>

   return (
   <div>
       
        <div className="event-card">
            <div className="event-card-info">
                <h3 onClick={handleUrl}>{title}</h3>
                <p className="grey">{host}</p>
                <p className="grey">{date}</p>
            </div>
            <div className="event-card-icons">
       <Link to={`/explore/${id}`}>
                <img src={EditIcon} alt="Edit Icon"/>
        </Link>
            </div>
        </div>
        
    </div>
   )
}

export default ExploreCard;