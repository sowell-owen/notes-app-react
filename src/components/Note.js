import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function Note(props) {

    const { text, date, id, handleDeleteNote, darkMode } = props

    return (
        <div className={`${darkMode ? 'note dark' : 'note'}`}>
            <p>{text}</p>

            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever
                    className={`${darkMode ? 'delete-icon dark' : 'delete-icon'}`}
                    onClick={() => handleDeleteNote(id)}
                />
            </div>
        </div>
    )
}