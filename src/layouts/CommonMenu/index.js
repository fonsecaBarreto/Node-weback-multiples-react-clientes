import React, { useEffect, useState } from 'react'
import './style.css'
import MenuItem from './Item' 
import ToggleButton from '../ToggleButton'
import LogoImage from '../../assets/images/logo.svg'
import UserComponent from './UserComponent'
export default ({show, setShow, toggle, pages}) =>{
 
   /*  const isSelected = (page) => {
        if( page?.to === currentPage ) return true
        if( page?.subs ){
            const subsToList =page.subs.map(p=>(p.to))
            if(subsToList.includes(currentPage)) return true
        }
    } */


    return (
    
    <aside className={`common-menu ${show ? 'show' : ''}`}>

        <section className="common-menu-header">
            <img src={LogoImage}></img>
            <ToggleButton onClick={toggle} desktop></ToggleButton>
        </section>

        <section>
            <ul> {              
                ( pages && pages.length ) && pages.map((p,i)=>{
                    if(!p.hide) return ( <MenuItem config={p} key={i} menuState={{ show, toggle, setShow} }> </MenuItem>) }) 
            } </ul>
        </section>
        
        <section>
            <UserComponent menuState={{ show, toggle, setShow} }></UserComponent>
        </section>

    </aside>)
}