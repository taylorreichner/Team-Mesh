import React, { useEffect, useState} from 'react';
import ExploreList from '../../Components/explore-components/exploreList.jsx'
import { fetchEvents } from '../../Services/eventsApi';
import './feed.css'
import NoteList from '../../Components/note-components/noteList'
import ExploreIcon from '../../assets/icons/icon-explore-24.svg'
import NotesIcon from '../../assets/icons/icon-notes-24.svg'
import { fetchNotes } from '../../Services/eventsApi';



const Explore = ({userId}) => {
    const [events, setEvents] = useState([])
    const [noteEvents, setNoteEvents] = useState([])
    const [exploreOrNotes, setExploreOrNotes] = useState(true)
    
    useEffect(() => {
        fetchEvents()
        .then(setEvents)
        fetchNotes(userId)
        .then(setNoteEvents)
    },[userId]);

    const handleClickNotes = (e) => {
        e.preventDefault();
        setExploreOrNotes(false)
    }
    
    const handleClickExplore = (e) => {
        e.preventDefault();
        setExploreOrNotes(true)
    }
        

    return (
        <>
        <h2 className="feed-title">Explore new events</h2>

        <div className="feed-tabs">
            <div className="tab active-tab">
                 <img src={ExploreIcon} alt="Explore Icon" className="Explore" />
                <h4 onClick={handleClickExplore}>Explore</h4>
            </div>
            <div className="tab inactive-tab">
                <img src={NotesIcon} alt="Notes Icon" className="Notes" />
                <h4 onClick={handleClickNotes} >Notes</h4>
            </div>
        </div>
        <div className='explore-feed'>
            {exploreOrNotes ? (

                <ExploreList events={events}/>
                ) : (
                    
                <NoteList noteEvents={noteEvents}/>
            )
                
            }
        </div>
        <div className="rect rect-blue rect-border feed-rect"></div>
        </>
    )
    
}

export default Explore;