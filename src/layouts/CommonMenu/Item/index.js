import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import { useWindowSize } from '../../../components/utils/useWindowSize'
export default ({ config, selected, menuState }) =>{

    const screenSize = useWindowSize()
    const { label, icon, to, childs } = config 
    const [ show, setShow ] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        if(menuState.show === false){
            setShow(false)
        }
    },[menuState.show]) 

    const handleClick = (to, childs) =>{
        to && history.push(to)
        if(childs){
            if(menuState.show === false){ menuState.setShow(true) }
            setShow(!show)
        }
        else{
            if (screenSize.width < 756) {
               menuState.setShow(false)
            }
        }
    }

    return (
    <li className={`common-menu-item ${selected ? 'selected' : ''}`} > 

        <span  className="common-menu-item-row" onClick={() => handleClick(to, childs)} >
            <span className="common-menu-ico"> {icon && icon}  </span>
            <span> {label} </span>
        </span>

        { (childs && childs.length > 0 ) &&
            
            <div className={`common-menu-item-body ${show? 'show' : ""}`}>

                {childs.map((c,i)=>{
                    if(!c.hide){
                        return (
                            <span className={`common-menu-item-body-sub-item`} key={i}  onClick={ () => handleClick(c.to, null)} > 
                                <span> {c.icon} </span>
                            <span> {c.label} </span>
                        </span> )
                    }
                })}

            </div>
        }  

    </li>)
}