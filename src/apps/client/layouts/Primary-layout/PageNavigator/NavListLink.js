import React, { useEffect, useState } from 'react'

export default ({to, hash, label, icon, onClick, current}) =>{
    const [ selected, setSelected ] = useState(false)
    useEffect(()=>{
       setSelected(false) 
        
        if(hash == current[1]){
            setSelected( true )
        } 
        


    },[current])
    return (
        <li className={ `nav-list-link ${selected? 'active': ''}`} onClick={() =>onClick(to, hash)}> 
            {icon &&  <span className="nav-list-icon"> {icon} </span>}
            <span> {label && label} </span>

         
         </li>
    )
}