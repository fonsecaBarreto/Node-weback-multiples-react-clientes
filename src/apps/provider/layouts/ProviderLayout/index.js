import React, { useEffect, useState } from 'react'
import './style.css'
import CommonMenu from '../../../../layouts/CommonMenu'
import CommonHeader from '../../../../layouts/CommonHeader'
import { Link } from 'react-router-dom'

export default ({children, struct, currentPage }) =>{
    const [ expandMenu, setExpandMenu ] = useState(true)

    const toToggle = () =>{
        setExpandMenu(!expandMenu)
    }

    return (
        <div className="provider-layout">

            <CommonMenu show={expandMenu} toggle={toToggle} setShow={setExpandMenu} pages={struct}> </CommonMenu>

            <CommonHeader toggle={toToggle} currentPage={currentPage} ></CommonHeader>

            <main>
                {children}
            </main>

        </div>
    )
}