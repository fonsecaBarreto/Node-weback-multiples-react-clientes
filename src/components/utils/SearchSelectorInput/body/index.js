import React, { useState, useEffect, useRef, useCallback } from "react"
import './style.css'
import { HiOutlineEmojiSad } from 'react-icons/hi'

export default ({ state, loadFunction, onItemClick, component: Component }) => {

    const { dataState, statusState } = state 

    const observer = useRef()
    const lastItemRef = useCallback(node => {
        if (statusState.loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if ( entries[0].isIntersecting && ( dataState.data.items.length < dataState.data.total ) ) { return loadFunction( dataState.data.items.length, false )}})
        if (node) observer.current.observe(node)
    }, [ statusState.loading, dataState, dataState.data, dataState.data.items, dataState.data.total ])

    const handleItemClick = (item) =>{
         if( !item.label || !item.value) throw new Error("Dado invalido...")
        statusState.setShow(false)
        dataState.setText("")
        onItemClick({ label: item.label, value: item.value })
    }

    return (
        <div className={`ssi-body ${statusState.show? 'show' : ''}`} >

            { dataState.data.items.length > 0 && dataState.data.items.map((n,i)=>{
                return (  
                <div className="ssi-item-wrapper" key={i} onClick={()=>handleItemClick(n)}> 
                    { ( !n.label || !n.value) ? "Dado invalido..." :  
                        (Component ? <Component {...n} ></Component>  :  n.label )
                    }
                </div>)
            })}

            <div ref={lastItemRef}> </div> 
            { statusState.loading && <span className="ssi-item-wrapper option-muted"> Procurando... </span> }
            { !statusState.loading && dataState.data.items.length === 0  && <span className="ssi-item-wrapper option-muted">  Nada encontrado  <HiOutlineEmojiSad></HiOutlineEmojiSad> </span> } 
        </div>
    )
}