import React from "react";
import { GoSearch } from 'react-icons/go'

export default function Search(props) {

    const { handleSearchNote, darkMode } = props

    return (
        <div className={`${darkMode ? 'search dark' : 'search'}`}>
            <GoSearch className="seacrh-icon" />
            <input onChange={(event) =>
                handleSearchNote(event.target.value)
            }
                type='text' placeholder='Type to search...' />
        </div>
    )
}