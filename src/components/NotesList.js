import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

export default function NotesList(props) {

    const { notesData, handleAddNote, handleDeleteNote, darkMode } = props

    const notesRender = notesData.map(item => <Note
        text={item.text}
        date={item.date}
        id={item.id}
        handleDeleteNote={handleDeleteNote}
        darkMode={darkMode}
    />)

    return (
        <div className='wrapper'>

            <div className='notes-list'>
                {notesRender}
                <AddNote handleAddNote={handleAddNote} darkMode={darkMode} />
            </div>

        </div>
    )
}