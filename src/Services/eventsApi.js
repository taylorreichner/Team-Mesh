export const fetchEvents = async () => {
    const res = await fetch('http://localhost:3001/api/v1/events/all')
    const result = await res.json();
   // console.log(result)
    return result
    
    

}


export const fetchEventsById = async (id) => {
    const res = await fetch(`http://localhost:3001/api/v1/events/${id}`)
    const result = await res.json()

    return result
}

export const fetchNoteEvents = async () => {
    const res = await fetch('http://localhost:3001/api/v1/userevents/all')
    const result = await res.json()

    return result
}

export const fetchNoteEventsById = async (id) => {
    const res = await fetch(`http://localhost:3001/api/v1/userevents/${id}`)
    const result = await res.json()
    
    return result
}