import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNoteEventsById } from '../Services/eventsApi';

const DetailNote = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  
  

  useEffect(() => {
    
    fetchNoteEventsById(id)
      .then(setEvent)
    
      
  }, [id]);

  console.log(event)
  
  return (
    <div>
    
     <div className="event-card">
         <div className="event-card-info">
             <h3>{event.title}</h3>
             <p className="grey">{event.host}</p>
             <p className="grey">{event.date}</p>
             <p className="grey">{event.url}</p>
             <div>{event.note}</div>



         </div>
         <div className="event-card-icons">
             <div>hi</div>
             <div>hi</div>
         </div>
     </div>
     
 </div>
  );
};

export default DetailNote;