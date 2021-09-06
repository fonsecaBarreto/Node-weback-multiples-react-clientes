import React, { Children } from 'react'
import './style.css'
/* import Footer from './Footer'
*/
import Header from './Header' 


export default ({children}) =>{
    return (
        <div className="primary-layout">
            <Header></Header>
            <main id="primary-main-content">
                {children}
            </main>
           {/* 
            <Footer></Footer> */}
        </div>
    )
}