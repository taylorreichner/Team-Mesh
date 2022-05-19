import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNoteEventsById } from '../../Services/eventsApi';

import CloseIcon from '../../assets/icons/icon-close-21.svg'

const DetailFilled = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    
    fetchNoteEventsById(id)
      .then(setEvent)
      
  }, [id]);

  
  
  return (
    <div>
      <img src={CloseIcon} alt="Close Icon" className="close-button" />
      <h4 className="details-title">Event Notes</h4>
      <div className="event-card details-card">
          <div className="event-card-info">
              <h3>{event.title}</h3>
              <p className="grey">{event.host}</p>
              <p className="grey">{event.date}</p>
              <p className="grey">{event.url}</p>
              <div>{event.note}</div>
          </div>
      </div>

     <div className="rect round-rect rect-blue rect-border"></div>
 </div>
  );
};

export default DetailFilled;