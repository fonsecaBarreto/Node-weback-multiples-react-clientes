import React, { useEffect, useState } from 'react'
import './style.css'
import FooterConsideration from './Footerconsideration'
import FooterContent from './FooterContent'
export default ({ }) => {
    return (
        <footer id="primary-footer" >
           <FooterContent></FooterContent>
            <FooterConsideration></FooterConsideration> 
        </footer>
    )
}