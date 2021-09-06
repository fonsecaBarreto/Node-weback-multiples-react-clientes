import React from 'react'
import './style.css'
import { FiPhone } from  'react-icons/fi'
import { AiOutlineMail } from  'react-icons/ai'
export default () =>{
    return (
        <ul className="primary-layout-footer-contact">
        <li> Rodovia amaral peixoto, 2511 - km 179 loja 01 - barra de macaé. Macaé-RJ. CEP 27973-030.</li>
        <li> 
            <span> <AiOutlineMail></AiOutlineMail> 
                adm@unacompras.com.br </span>
            <span> <FiPhone></FiPhone>(22) 99231-7557 </span>
        </li>
    </ul>
    )
}