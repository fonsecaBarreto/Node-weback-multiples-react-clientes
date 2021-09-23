import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import { AiOutlineCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { HiOutlineSearchCircle } from  'react-icons/hi'
import { useCounter } from '../utils'

export default ({ state, loadFunction, value, onInput }) =>{

    const { dataState, statusState } = state

    const { startToCount } = useCounter(dataState.text, () =>{
        loadFunction(0, true)
    })

    const open = () => { 
        if(dataState.data.items.length == 0 ){ loadFunction(0, true) }
        statusState.setShow(true) 
     }
    const handleText = (e) =>{  dataState.setText(e.target.value)  }
    const handleKey = (e) =>{
        clearValue() 
        startToCount(e)
    }

    const clearValue = () =>{
        onInput({value: "", label: ""})

    }

    const { text } = dataState
    return (
        <div className="search-selector-input-area">

            <span className={`ssia-float acs-status ${(value.label && value.value) ? 'success' : '' }`}>
                { (value.label && value.value) ? <AiOutlineCheckCircle/> : <HiOutlineSearchCircle/> }
            </span>

            <input type="text" value={value.label || text} onChange={handleText} onClick={open} onKeyUp={handleKey}></input>

            <span className={`ssia-float acs-close ${( value.value && value.label) ? 'show' : '' }`} onClick={handleKey}>
                <AiFillCloseCircle/> 
            </span>

        </div>
    )

}