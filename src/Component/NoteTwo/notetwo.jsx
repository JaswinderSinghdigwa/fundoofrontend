import React from "react";


function NoteTwo() {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const AddTitle = (event) =>{
        setTitle(event.target.value)
    }
    const AddDescription = (event) =>{
        setDescription(event.target.value)
    }
    const addNote = () =>{
        console.log(title, description);
        let obj ={
            "title": title,
            "description": description
        }
    }

    return (
        <div className="noteContainerTwo">
            <div className="childOneNoteTwo">
                <input type="text" placeholder="title" className="inputFields" onChange={AddTitle}/>
            </div>
            <div className="childTwoNoteTwo">
            <input type="text" placeholder="take a note" className="inputFields" onChange={AddDescription}/>
            </div>
            <div className="childThreeNoteTwo">
                <div className="iconHolder">
                <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    </div>
                <div className="closeButton">
                    <button className="closeButton1" onClick={addNote}>Close</button>
                </div>
            </div>
        </div>
    )
}