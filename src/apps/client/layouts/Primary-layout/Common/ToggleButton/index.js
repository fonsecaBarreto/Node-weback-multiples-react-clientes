import React from 'react'
import './style.css'
import { FaBars } from 'react-icons/fa'
export default ({onClick, icon}) =>{
    return (
        <button className="common-toggle-button" onClick={onClick} >{  icon ? icon : <FaBars></FaBars>} </button>
    )
}