import React, { useState, useEffect, useRef, useCallback } from "react"
import './style.css'

import SearchInput from "./searchInput"
import SearchBody from './body'
import { useOutsideAlerter, useCounter } from './utils'


const INITIAL_DATA = {
    total: 0,
    items: []
}

export const SelectorState = () =>{

    const [ data, setData ] = useState({ ...INITIAL_DATA})
    const [ text, setText ] = useState('')
    
    const [ loading, setLoading ] = useState(false)
    const [ show, setShow ] = useState(false)

    const clearData = () => { setData(prev=>({...INITIAL_DATA}))}
    const clearText = () => { setText(prev=>(''))}

    return { 
        dataState:{
            data, setData, clearData,
            text, setText, clearText
        },
        statusState:{
            loading, setLoading,
            show, setShow,
        }
    }
}

export const useLoadFunction = ( config, state ) => {

    return async ( offset = 0, clear = false) => {
        if(!config || !config.loadFunction) return console.log("Defina uma função de carregamento")

        const { dataState, statusState } = state

        statusState.setLoading(true)
        try{
            const result  = await config.loadFunction(offset, dataState.text )
            if(!result) return
            const { total, data } = result
            return dataState.setData( prev => ({  total, items: clear ? data : [ ...prev.items, ...data ]}))
        }
        catch(err){ console.log(err)}
        finally{ statusState.setLoading(false)}
    }
}

export default ( { config={}, value={ label:"", value:"" }, onInput } ) =>{

    const state = SelectorState()

    const handleLoadFunction = useLoadFunction(config, state)
    
    const componentRef = useRef(null);
    useOutsideAlerter(componentRef, () =>{ state.statusState.setShow(false)  });

    return (
        <div className={`search-selector-input ${ (config && config.disabled) ? 'disabled' : ''}`} ref={componentRef}>
            { ( !config || !config.loadFunction )? "Defina uma função de carregamento e um componente padrão" :

                <React.Fragment>
                    <SearchInput state={state} loadFunction={handleLoadFunction} onInput={onInput} value={value}></SearchInput> 
                    <SearchBody  state={state} loadFunction={handleLoadFunction} onItemClick={onInput} component={config.component}></SearchBody>
                </React.Fragment>
            } 
        </div>

    )
}