import React from 'react'
import './style.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
export default () =>{
    return (
        <nav className="primary-layout-social-media-nav">
            <span className="social-icon"><FaInstagram></FaInstagram></span>
            <span className="social-icon"><FaFacebookF></FaFacebookF></span>
            <span className="social-icon"><FaWhatsapp></FaWhatsapp></span>
        </nav>
    )
}