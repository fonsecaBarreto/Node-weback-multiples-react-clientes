import React, { useEffect, useRef, useState } from "react"
import './style.css'
import { withRouter } from 'react-router-dom'
import HeadLine from "./HeadLine"
import PerksRow from './PerksRow'
export default withRouter(({history}) =>{


    return (
        <div id="home-page">
            <HeadLine></HeadLine>
            <PerksRow></PerksRow>
        </div>
    )
})