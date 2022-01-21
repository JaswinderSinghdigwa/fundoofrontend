import axios from 'axios';

const config = {
    headers: {
        "authorization":"Bearer"+ " " +localStorage.getItem("token")    
    }
}

export function noteAdd(obj)
{
    let response=axios.post("http://localhost:3000/note",obj, config)
    return response;
}

export function getNote()
{
    let response=axios.get("http://localhost:3000/notes",config)
    return response;
}
export function deleteNote(id)
{
    let idOne =id
    console.log("id",idOne);
    console.log("333",config);
    let response=axios.delete(`http://localhost:3000/note/${idOne}`,config)
    return response;
}