import React, { Component, useEffect, useState } from 'react'
import FormBuilder, { makeText, makeNumber, makeSelect, FormState, makeSearchSelect } from '../../../../../components/AppForm/FormBuilder'
import SearchSelectorInput from '../../../../../components/utils/SearchSelectorInput'
import CommonFormPanel from '../../../../../components/AppForm/CommonFormPanel'
import InputWrapper from '../../../../../components/AppForm/InputWrapper'

/* 
const testList = [
    {label: "Lucas", value:"a"},
    {label: "Amanda", value:"b"},
    {label: "Luna", value:"c"},
    {label: "Monica", value:"d"},
] */


const testLoadingFunction = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            console.log("Função de loading definida")
            return resolve({
                total: 200,
                data: [
                    { label: "Primeiro", value: "1" },
                    { label: "asda3aaad", value: "2" },
                    { label: "asdaaa", value: "3"},
                    { label: "2222", value: "4"},
                    { label: "asd33333ad", value: "5"},
                    { label: "asd33333ad", value: "5"},
                    { label: "asd33333ad", value: "5"},
                    { label: "asd33333ad", value: "5"},
                    { label: "asd33333ad", value: "5"},
                    { label: "asd33333ad", value: "5"},
                    { label: "asd33333ad", value: "5"}
                ]
            })

        },1000)
    })
}
//comment to test commit


const inputsSchema = [
   /*  makeText("name", "Nome da empresa *", { capital:true }),
    makeText("corporate_name","Razão social  *"),
    makeText("cnpj","CNPJ *"),
    makeText("responsible_name","Nome do responsável *"),
    makeText("phone","Telefone"),
    makeText("email","E-mail"),
    makeText("financial_email","E-mail financeiro"), */
    makeText("obs","Observações", { long:true }),
    makeSelect("uf", "Regiao", {list:[{label:"asd", value:"233"}]}),
    makeNumber("age","Idade"),
    makeSearchSelect("teste", "Testando", { loadFunction: testLoadingFunction})
]

export default () =>{
    const formState = FormState(inputsSchema, [6,6,6,6,6])
    return (

        <div>
            <FormBuilder state={formState}>
                <span>assdasdasd</span>
            </FormBuilder>

  

            { JSON.stringify(formState.inputsState.data) } 
 

        </div>
    )
}