import { nanoid } from 'nanoid';
import React from 'react'
import './index.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

export default function App() {

  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "Hi 👋 Hope you'll like this app!",
      date: '(the date the note was created will be displayed here)'
    }
  ])

  const [seacrhText, setSeacrhText] = React.useState('')

  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notesy-app-data'))
    const savedTheme = JSON.parse(localStorage.getItem('notesy-app-theme'))

    if (savedNotes) {
      setNotes(savedNotes)
    }

    setDarkMode(savedTheme)
  }, [])


  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  React.useEffect(() => {
    localStorage.setItem('notesy-app-data', JSON.stringify(notes))
  }, [notes])

  React.useEffect(() => {
    localStorage.setItem('notesy-app-theme', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    // <div className={`${darkMode && 'dark-mode'}`}>

    <div className={`${darkMode ? 'container dark-mode' : 'container'}`}>
      <Header
        handleToggleDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Search handleSearchNote={setSeacrhText} darkMode={darkMode} />
      <NotesList
        notesData={notes.filter((note) => note.text.toLowerCase().includes(seacrhText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        darkMode={darkMode}
      />
    </div>

    //</div>
  )
}