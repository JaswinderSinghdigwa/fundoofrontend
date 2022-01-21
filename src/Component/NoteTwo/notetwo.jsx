import React from 'react'
import './notetwo.css'
import { noteAdd } from '../../Service/dataService'
function NoteTwo(props) {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const takeTitle = (event) => {
        setTitle(event.target.value)
    }
    const takeDescription = (event) => {
        setDescription(event.target.value)
    }
    const noteAdded = async () => {
        console.log(title, description);
        let obj = {
            "title": title,
            "description": description
        }
        noteAdd(obj).then((res) => {
            props.getAllNote()
            console.log(res)
            console.log("props",props);
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
        console.log(obj);
    
    }
     

    return (
        <div className="containerNoteOne">
            <div className="containerNoteTwo">
                <input type="text" placeholder="Title" className="inputFields" onChange={takeTitle} />
            </div>
            <div className="containerNoteThree">
                <input type="text" placeholder="take a note" className="inputFields" onChange={takeDescription} />
            </div>
            <div className="containerNoteFour">
                <div className='icons'>
                    <i class="material-icons">add_box</i>
                    <i class="material-icons">group_add</i>
                    <i class="material-icons">mms</i>
                    <i class="material-icons">palette</i>
                    <i  class="material-icons">play_for_work</i>
                </div>
                <div className="ButtonClose">
                    <button className="closeButtonOne" onClick={noteAdded}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default NoteTwo