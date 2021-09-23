import React from "react"

export const makeSchemaRow =({ type, name, label, value, config }) =>{
    if(!type || !name) throw new Error("p004a")
    return (
        {
            type,
            name,
            label: label || "",
            value: value ? value : (  type == "number" ? 0 : ""  ),
            config
        }
    )
}

export const makeText =(name, label, extended = {}) =>{
    const { placeHolder="", long=false, capital=false, mask= null, initial="" } = extended

    return makeSchemaRow( { 
        type: long ? "textarea" : "text",name, label, 
        value: initial,
        config: { placeHolder, capital, mask }
     })
}

export const makeNumber =(name, label, extended={}) =>{
    const { min, max, initial=0 } = extended
    return makeSchemaRow( { 
        type:"number", name, label,
        value: initial,
        config: { min, max }
    })
}

export const makeSelect =( name, label, extended={}) =>{
    const { initial ={ value: "", label: "" }, list = [] } = extended
    return makeSchemaRow( { 
        type:"select",  name,  label,
        value: initial,
        config: { list }
    })
}


export const makeSearchSelect =( name, label, extended={}) =>{
    const { initial ={ value: "", label: "" }, disabled=false, component, loadFunction } = extended
    return makeSchemaRow( { 
        type:"searchSelect", name, label,
        value: initial,
        config: { loadFunction, disabled, component }
    })
}
