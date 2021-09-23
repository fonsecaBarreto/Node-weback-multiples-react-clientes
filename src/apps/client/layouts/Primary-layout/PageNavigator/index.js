import React, { useEffect, useState } from 'react'
import './style.css'
import NavListLink from './NavListLink'
import ActionButton from '../Common/ActionButton'
import { FaUserCircle } from 'react-icons/fa'
import { useHistory, useLocation} from 'react-router-dom'
import { ImEnter, ImExit, ImHome } from 'react-icons/im'
import { AiOutlineForm } from 'react-icons/ai'
import { FaRegHandshake } from 'react-icons/fa'

const ITEMS = [
    { to:"/inicio", hash:"",           label: "Inicio", icon: <ImHome></ImHome>},
    { to:"/inicio", hash:"#objetivos", label: "Objetivos", icon:<FaRegHandshake></FaRegHandshake> },
    { to:"/inicio", hash:"#cadastrar", label: "Cadastrar-se", icon: <AiOutlineForm></AiOutlineForm> }
]

export default ({ mart, className }) =>{

    const history = useHistory()
    const location = useLocation()
    const [currentPage, setCurrentPage ] = useState(['',''])

    const goTo = (to, hash) => {  
        history.push({ pathname: to, hash})
    } 

    useEffect(()=>{
        setCurrentPage([location.pathname, location.hash])
    },[location])

    return (
        <nav className={`primary-page-navigator ${className}`}>
            <section>
                <ul>
                    { ITEMS.map((item, i) =>( <NavListLink {...item} key={i} onClick={goTo}  current={currentPage} > </NavListLink> ))}
                </ul>
            </section>

            <section>
                {mart ?
                    <ActionButton icon={<FaUserCircle></FaUserCircle>} label={"Area do Cliente"} onClick={()=>goTo('/marts/orcamento')}></ActionButton>
                    :
                    <ActionButton icon={<ImEnter></ImEnter>} label={"Entrar"} onClick={()=>goTo('/login')}></ActionButton>
                }
            </section>
        </nav>
    )
}