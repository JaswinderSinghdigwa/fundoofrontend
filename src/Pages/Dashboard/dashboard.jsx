import React from "react";
import Header from "../../Component/header/header";
import Notetwo from '../../Component/NoteTwo/notetwo'
import Noteone from "../../Component/Noteone/noteone";
import {getNote,deleteNote} from '../../Service/dataService'
import './dashboard.css'

const Dashboard =()=>{

    const [notes,setNotes] = React.useState([])
    const [noteView, setNoteView] = React.useState(true)
    const listenToNoteOne = (data) => {
        setNoteView(false)
    }
    const getAllNote=()=>{
        getNote()
        .then((data)=>{
            console.log("data",data);
            setNotes(data.data.data)
            setNoteView(true)
        })
        .catch((error)=>{
            console.log("error",error);
        })
    }
    React.useEffect(()=>{
        getAllNote()
    },[])
    const deletedNote = (event) =>{
        deleteNote(event.target.id).then((data)=>{
            getAllNote()
            console.log("res",data)
        })
        .catch((error)=>{
            console.log("222",error);
        })
    }

    return(
        <div>
            <Header />
            <div className='notesHolders'>
                {noteView ? <Noteone listenToNoteOne={listenToNoteOne} /> : <Notetwo getAllNote={getAllNote} />}
            </div>
            <div className="notes-container">
                {
                    notes.map((note)=>(
                        <div className="note-box">
                            {
                                note.title,
                                note.description
                            }
                 <div className="containerNoteFour">
                <div className='iconHolder'>
                    <i class="material-icons">add_box</i>
                    <i class="material-icons">group_add</i>
                    <i class="material-icons">mms</i>
                    <i class="material-icons">palette</i>
                    <i  onClick={deletedNote} id = {note._id} class="material-icons">delete</i>
                </div>
                </div>
                         </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Dashboard