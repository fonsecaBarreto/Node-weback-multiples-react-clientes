import React, { useState, useEffect } from 'react'
export default ({row, value, onInput}) =>{
    const [ list, setList ] = useState([])
    const { name, config } = row

    useEffect(()=>{
        if(!config) return
        setList([ {value:"", label: "Selecione"}, ...config.list ])
    },[config]) 

    const handleInputs = (e) =>{
        const index= e.nativeEvent.target.selectedIndex
        const value =  e.nativeEvent.target[index].value
        const label =  e.nativeEvent.target[index].innerText
        return onInput(name, { label, value })
    }

    return (

        <select value={value.value} onChange={handleInputs}> 
        { 
           list.map((item, i)=>( <option key={i} value={item.value}>{item.label}</option> )) 
        }

    </select>

    )
}