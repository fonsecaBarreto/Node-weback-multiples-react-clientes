import React, { useState, useEffect } from 'react'
import CommonFormPanel from '../CommonFormPanel'
import { MakeWrappedInput } from './inputs/index'
export * from './schema'

export const FormState = (schema, columns) =>{
    if(!schema) return 

    const [ initialData, setInitialData ] = useState(null)
    const [ data, setData ] = useState({})
    const [ errors, setErrors ]= useState({})
    const handleInputs = (key,value) => { setData(prev => ({  ...prev,  [key]:value })) }

    useEffect(()=>{
        const inputsData = {}
        const errorsData = {}
        schema.map((row,i)=>{
            inputsData[row.name]=row.value
            errorsData[row.name]=""
        }) 
        if(initialData === null) setInitialData(inputsData)
        setData(inputsData)
        setErrors(errorsData)
    },[schema])

    return {
        inputsState: { data, setData, handleInputs, initialData},
        errorsState: { errors, setErrors },
        schemaState: { columns, schema }
    }
}


export default ({ state, children }) =>{

    const { schemaState, inputsState } = state
    return (  
        <React.Fragment>
           { 
                schemaState.schema == null ? "Defina um esquema valido" :
                inputsState.initialData === null ? "Carregando ..." :
                <CommonFormPanel title="" columns={schemaState.columns}>
                    {  
                        schemaState.schema.map((row,i)=>{ 
                            return ( <MakeWrappedInput row={row} key={i} state={state} ></MakeWrappedInput>) 
                        })
                    }
             
                </CommonFormPanel> 
           }
        </React.Fragment>  )
}


