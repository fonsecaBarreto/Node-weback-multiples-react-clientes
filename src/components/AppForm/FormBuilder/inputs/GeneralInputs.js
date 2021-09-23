import React, { useEffect, useState } from 'react'

export default ({ row, value, onInput }) =>{

    const [ prop, setProp ] = useState({})
    const { name, type="text", config } = row

    useEffect(()=>{
        if(!config) return
        var prop = { placeholder: config.placeHolder || "" }
        if(config.min){ prop.min = config.min }
        if(config.max){ prop.max = config.max }
        setProp(prop)
    },[config])

    const handleValue = (value)=>{
        switch(type){
            case "text":
            case "textarea": {
                const { capital, mask } = config 
                if(capital){  value = value.replace(/\b\w/g, c => c.toUpperCase());  }
    
            };break
            default:  break;
        } 
        return value
    }

    const handleInputs = (e) =>{
        const newValue = handleValue(e.target.value)
        return onInput(name, newValue)
    }

    return (
        <React.Fragment>
        {
            type === "textarea" ?
                <textarea value={value} onChange={handleInputs} {...prop}></textarea> 
            :
                <input type={type} value={value} onChange={handleInputs} {...prop} ></input>
        }
        </React.Fragment>
    )
}