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
        <div className="admin-layout">

            <CommonMenu show={expandMenu} toggle={toToggle} setShow={setExpandMenu} pages={struct}> </CommonMenu>

            <CommonHeader toggle={toToggle} currentPage={currentPage} ></CommonHeader>

            <main>
                <Link to="/admin/list">Listagem</Link>
                <button onClick={toToggle}> Abriara aqui tb</button>
                {children}
            </main>

        </div>
    )
}