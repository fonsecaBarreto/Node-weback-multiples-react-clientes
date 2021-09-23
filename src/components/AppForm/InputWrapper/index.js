import React from 'react'
import './style.css'
export default  ({children, label, error, className}) => {
    return (
    <div className={`input-wrapper ${className} ${error ? "warning" : ''}`}>
        <label>{label}</label>
        {children}
        {error && 
        <span className="input-wrapper-error">
            {error}
        </span>
        }
    </div>)
}