
import React from 'react'
import { Link } from 'react-router-dom'


function Folder(props) {

    return (
        <li className='folder-item' key={props.id}>
            <h3 className='folder-heading'><Link to={`/folder/${props.id}`}>{props.name}</Link></h3>
        </li>
    )
}



export default Folder