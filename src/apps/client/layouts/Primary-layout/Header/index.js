import React, { useEffect, useState } from 'react'
import './style.css'
import Logo from '../../../../../assets/images/logo.svg'
import { useHistory } from 'react-router-dom'
/* import ToggleButton from '../../Common/ToggleButton'
import PageNavigator from '../PageNavigator'
 */
export default ({toggleMenu, admin, mart}) => {
    const history = useHistory()
    const [colorFull, setColorFull] = useState(false)

    useEffect(()=>{ window.addEventListener("scroll", handleScroll);},[])

    const handleScroll=()=>{
        if (window.pageYOffset > 8) {setColorFull(true)
        }else{setColorFull(false)}
    }

    return (
        <header id="primary-header" className={colorFull? 'colorful': ''}>
            <div className="primary-header-content primary-layout-container">
                {colorFull? "Colorado" : "Nope"}
              {/*   <section >
                    <img className="ph-logo"  src={Logo} alt="logo" onClick={()=>history.push("/")}></img>  
                </section>
                <section >
                    <PageNavigator mart={mart} className="desktop-only"></PageNavigator>  
                    <ToggleButton onClick={toggleMenu}></ToggleButton>
                </section>  */}
            </div> 
        </header>
    )
}