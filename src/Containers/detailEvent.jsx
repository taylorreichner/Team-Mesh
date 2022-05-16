import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventsById } from '../Services/eventsApi';

const DetailEvent = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [date, setDate] = useState('')
  const [host, setHost] = useState('')
  const [note, setNote] = useState('')
  

  const createNewUserEvent = async (e) => {
      e.preventDefault()
      await fetch(`http://localhost:3001/api/v1/userevents/new`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
              title,
              url,
              date,
              host,
              note
              
            })
        })
        
  }

 

  useEffect(() => {
    
    fetchEventsById(id)
      .then(setEvent)
    setTitle(event.title)
    setUrl(event.url)
    setDate(event.date)
    setHost(event.host)
      
  }, [id, event.title, event.url, event.date, event.host]);

  
  return (
    <div>
    
     <div className="event-card">
         <div className="event-card-info">
             <h3>{event.title}</h3>
             <p className="grey">{event.host}</p>
             <p className="grey">{event.date}</p>
             <p className="grey">{event.url}</p>
             

            <form onSubmit={createNewUserEvent}>
        <span>
          <textarea placeholder="I met Tina" onChange={(e) => setNote(e.target.value)}/>
        </span>
        
          <span>
            <button type="submit" variant="contained" size="large" color="primary">
        Add Question; 
            </button>
          </span> 
        
      </form>



         </div>
         <div className="event-card-icons">
             <div>hi</div>
             <div>hi</div>
         </div>
     </div>
     
 </div>
  );
};

export default DetailEvent;
