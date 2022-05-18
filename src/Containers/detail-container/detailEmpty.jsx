import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventsById } from '../../Services/eventsApi';
import '../../style.css'
import '../../Components/css/inputField.css'
import '../detail-container/detail.css'

import CloseIcon from '../../assets/icons/icon-close-21.svg'

const DetailEmpty = () => {
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
      <img src={CloseIcon} alt="Close Icon" className="close-button" />
      <h4 className="details-title">Event Notes</h4>
      <div className="event-card details-card">
        <div className="event-card-info">
            <h3>{event.title}</h3>
            <p className="grey">{event.host}</p>
            <p className="grey">{event.date}</p>
        </div>
      </div>

    <form onSubmit={createNewUserEvent}>
      {/* <span>
        <textarea placeholder="Enter your event notes (Contacts, LinkedIn’s, etc.)" onChange={(e) => setNote(e.target.value)}/>
      </span> */}
      <div class="input-field-box details-notes-box">
        <label className="input-box-label"><p>Event Notes</p></label>
        <textarea placeholder="Enter your event notes (Contacts, LinkedIn’s, etc.)" onChange={(e) => setNote(e.target.value)}>
        </textarea>
      </div>
      
      <button className="button-primary" type="submit">
        <h4>Save Notes</h4>
      </button>
    </form>
     
    <div className="rect round-rect rect-blue rect-border"></div>
 </div>
  );
};

export default DetailEmpty;
