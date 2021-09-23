import React, { useState } from 'react'
import './style.css'
import Footer from './Footer'
import Header from './Header' 
import Menu from './Menu'

export default ({ children }) =>{
    const [ showMenu, setShowMenu ] = useState(false)

    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }
    
    return (
        <div className="client-primary-layout">
            <Menu toggleMenu={toggleMenu} show={showMenu}></Menu>
            <Header toggleMenu={toggleMenu}></Header> 
            <main >
                {children}
            </main>
            <Footer></Footer>  
        </div>
    )
}