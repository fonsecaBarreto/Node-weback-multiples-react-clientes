import React from 'react'
import './style.css'
export default ({icon, label, onClick}) => {
    return (
        <button className="common-action-btn" onClick={onClick}>

            {icon && icon} { label && label}
        </button>
    )
}