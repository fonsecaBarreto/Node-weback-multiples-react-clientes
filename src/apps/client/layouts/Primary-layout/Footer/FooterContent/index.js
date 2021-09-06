import React from 'react'
import './style.css'
import Logo from '../../../../../../assets/logo2.svg'

/*
import SocialMediaNav from './FooterContent/SocialMediaNav'  */
import ContactList from './ContactList'
import SocialMediaNav from './SocialMediaNav'
export default () =>{
    return(
        <div className="primary-layout-footer-content primary-layout-container">
            
            <section> <img src={Logo} alt="logo"></img> </section>
            <section> 
                <ContactList></ContactList>
                <SocialMediaNav></SocialMediaNav>
            </section>

        </div>

    )
}