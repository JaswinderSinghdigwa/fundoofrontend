import React from 'react'
import './noteone.css'

function Noteone(props) {

    const Clicked = () => {
        props.listenToNoteOne("Hello")
    }

    return (
        <div>
            <div className='note'>
                <input type="text" className="setField" placeholder="Take a note...." onClick={Clicked} />
            </div>
        </div>
    )
}

export default Noteone