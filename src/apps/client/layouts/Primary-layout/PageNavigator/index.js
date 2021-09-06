import React, { useEffect, useState } from 'react'
import './style.css'
import NavListLink from './NavListLink'
import { useHistory } from 'react-router-dom'
import ActionButton from '../../Common/ActionButton'
import { FaUserCircle } from 'react-icons/fa'
import 'react-router-dom'

const NAV = [
    { to:"/inicio", label: "Inicio" },
    { to:"/inicio/#objetivos", label: "Objetivos" },
    { to:"/inicio/#sobre", label: "Sobre" }
]

export default ({ mart, className }) =>{

    const history = useHistory()
    const [currentPage, setCurrentPage ] = useState(null)
    const goTo = (to) => {  history.push(to)  } 

    useEffect(()=>{
        console.log("Meu saco mano")
    })

    useEffect(()=>{
        console.log(history.location)
        if(["/inicio",'/inicio/'].includes(history.location.pathname) ){
            setCurrentPage(history.location.pathname+history.location.hash)
        }
        else{ setCurrentPage(history.location.pathname)}
    },[history.location, history.location.pathname, history.location.hash])

    const history = useHistory()

    
    return (
        <nav className={`main-page-navigator ${className}`}>
            <section>
 
                <ul>
                    { NAV.map((item, i) =>( <NavListLink onClick={goTo} {...item} key={i} selected={currentPage === item.to ? true : false}> </NavListLink> ))}
                </ul>

          
            </section>

            <section>

                {currentPage}
          {/*       {JSON.stringify(currentPage)} */}
                {mart ?
                    <ActionButton icon={<FaUserCircle></FaUserCircle>} label={"Area do Cliente"} onClick={()=>goTo('/marts/orcamento')}></ActionButton>
                    :
                    <ActionButton label={"Entrar"} onClick={()=>goTo('/login')}></ActionButton>
                }
            </section>
        </nav>
    )
}