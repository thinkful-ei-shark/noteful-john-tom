import React from 'react'
import { Link } from 'react-router-dom'



function Note(props) {

    return (
        <li className='note-list-item'>
            <h3>
                <Link to={`/note/${props.id}`}>{props.name}</Link>
            </h3>
            <p>Date Modified</p>
            <button type='button'>Delete Note</button>
        </li>
    )
}






export default Note