import React from 'react'
import Note from './Note'
import { BsPlusCircleFill } from 'react-icons/bs'

export default function AddNote(props) {

    const [noteText, setNoteText] = React.useState('')

    const handleChange = (event) => {
        chararactersLimit - event.target.value.length >= 0 &&
            setNoteText(prevText => event.target.value)
    }

    const { handleAddNote, darkMode } = props

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        } else {
            alert('Nothing to save 😥')
        }
    }

    const chararactersLimit = 200

    return (
        <div className={`${darkMode ? 'note new dark' : 'note new'}`}>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a new note...'
                value={noteText}
                onChange={handleChange}
            >
            </textarea>
            <div className='note-footer'>
                <small>{chararactersLimit - noteText.length} Characters remaining</small>
                <BsPlusCircleFill
                    className={`${darkMode ? 'save-icon dark' : 'save-icon'}`}
                    onClick={handleSaveClick} />
            </div>
        </div>
    )
}