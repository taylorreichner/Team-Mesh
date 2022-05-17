import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eventCard.css'

import EditIcon from '../../assets/icons/icon-edit-24.svg'
import NotesIcon from '../../assets/icons/icon-notes-24-grey.svg'

const ExploreCard = ({id ,title, url, date, host}) => {
   
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
                <img src={EditIcon} alt="Edit Icon"/>
                <img src={NotesIcon} alt="Notes Icon"/>
            </div>
        </div>
        </Link>
    </div>
   )
}

export default ExploreCard;