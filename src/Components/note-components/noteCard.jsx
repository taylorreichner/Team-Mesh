import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eventCard.css'
import EditIcon from '../../assets/icons/icon-edit-24.svg'


const NoteCard = ({id ,title, url, date, host, note}) => {
   
    // <img src={NotesIcon} alt="Notes Icon"/> 
   return (
   <div>
        <div className="event-card">
            <div className="event-card-info">
                <h3>{title}</h3>
                <p className="grey">{host}</p>
                <p className="grey">{date}</p>
                <p className="grey">{url}</p>
                
            </div>
            <div className="event-card-icons">
       <Link to={`/note/${id}`}>
            <img src={EditIcon} alt="Edit Icon"/>
        </Link>
              
            </div>
        </div>
    </div>
   )
}

export default NoteCard;