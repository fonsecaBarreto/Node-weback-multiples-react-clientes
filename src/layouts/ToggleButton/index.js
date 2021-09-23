import React from 'react'
import './style.css'
import { FaBars }  from 'react-icons/fa'
export default ({onClick,desktop}) =>{
    return (
        <button className={`common-toggle-button  ${desktop? 'toggle-on-desktop': ''}`} onClick={onClick}> <FaBars></FaBars> </button>
    )
}