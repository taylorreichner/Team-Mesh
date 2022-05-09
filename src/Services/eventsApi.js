export const fetchEvents = async () => {
    const res = await fetch('http://localhost:3001/api/v1/events/all')
    const result = await res.json();
    console.log(result)
    return result
    
    

}