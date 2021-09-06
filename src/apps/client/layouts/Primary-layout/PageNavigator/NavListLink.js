import React from 'react'

export default ({to, label, selected, onClick}) =>{

    return (
        <li className={ `nav-list-link ${selected? 'active': ''}`} onClick={() =>onClick(to)}> {label} </li>
    )
}