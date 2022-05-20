export const fetchEvents = async () => {
    const res = await fetch('http://localhost:3001/api/v1/events/all')
    const result = await res.json();
   
    return result
}

export const fetchEventsById = async (id) => {
    const res = await fetch(`http://localhost:3001/api/v1/events/${id}`)
    const result = await res.json()

    return result
}

export const fetchNotes = async (id) => {
    const res = await fetch(`http://localhost:3001/api/v1/userevents/all/${id}`)
    const result = await res.json()
   
    return result
}

export const fetchNoteEventsById = async (id) => {
    const res = await fetch(`http://localhost:3001/api/v1/userevents/${id}`)
    const result = await res.json()
    
    return result
}