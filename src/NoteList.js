import React from 'react'
import Note from './Note.js'

class NoteList extends React.Component {

     newArray = ()=> {
       const newArrayVar = this.props.notes.map(note=> {
           return (
               <Note id={note.id} name={note.name}/>
           )
       })
       return newArrayVar //this is an array of Note components
    }

    render() {
        console.log(this.props.notes)
        return (
            <div>
                {this.newArray()}
            </div>

        )
    }
}


export default NoteList