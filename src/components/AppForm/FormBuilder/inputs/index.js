import React from "react"
import InputWrapper from '../../InputWrapper'
import SelectInput from "./SelectInput"
import GeneralInputs from "./GeneralInputs" 
import SearchSelector from "./searchSelectorAdapter"
export const MakeWrappedInput = ({ row, state }) =>{
    
    const { inputsState, errorsState } = state
    const { name, label, type } = row

    const value = inputsState.data[name]
    const error = errorsState.errors[name]

    return (  
        <InputWrapper label={label} error={error}  > 
            {   ['text', 'number', 'textarea', 'password'].includes(type) ? 
                    <GeneralInputs row={row} value={value} onInput={inputsState.handleInputs}></GeneralInputs> 
                : type === "select" ?
                    <SelectInput row={row} value={value} onInput={inputsState.handleInputs}></SelectInput>
                : type === "searchSelect" ? 
                    <SearchSelector row={row} value={value} onInput={inputsState.handleInputs}></SearchSelector>
                : <span> Invalido !</span>
            }
        </InputWrapper> )
}



