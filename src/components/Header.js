import React from "react";
import { MdDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'

export default function Header(props) {

    const { handleToggleDarkMode, darkMode } = props

    return (
        <div className="header">
            <h1> NoteSy 📝</h1>

            {!darkMode ?
                <MdDarkMode
                    className="mode-icon"
                    onClick={() => handleToggleDarkMode(prevMode => !prevMode)} />
                :
                <MdOutlineLightMode
                    className="mode-icon dark-icon"
                    onClick={() => handleToggleDarkMode(prevMode => !prevMode)} />}
        </div>
    )
}