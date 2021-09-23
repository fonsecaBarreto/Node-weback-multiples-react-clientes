import React, { useState, useEffect } from 'react'
import SearchSelectorInput from '../../../utils/SearchSelectorInput'

const INITIAL_PROPS = {
    loadFunction: null,
    disabled: true,
    component: null,
}

export default ({row, value, onInput}) =>{
    const [ props, setProps ] = useState(INITIAL_PROPS)
    const { name, config } = row

    useEffect(()=>{
        if(!config) return
        const { loadFunction, component, disabled } = config
        var leProps = {  ...INITIAL_PROPS, loadFunction, component, disabled}
        setProps(leProps)

    },[config]) 

    const handleInputs = (result) =>{
        return onInput(name, result) 
    }

    return (

    <SearchSelectorInput 
        value={value}
        onInput={handleInputs}
        config={{ ...props }}
    ></SearchSelectorInput>


    )
}