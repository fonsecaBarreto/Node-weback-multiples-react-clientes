import React from 'react'
import './style.css'

import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'
import ToggleButton from '../ToggleButton'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
export default ({toggle, currentPage}) =>{
    const history = useHistory()
    const resolveBread = () =>{
       const breadCrumbs = currentPage.breadCrumbs
      return (
            <React.Fragment>
                {  breadCrumbs.map((b,i)=> ( <Link key={i} to={b.value}>
                        <IoIosArrowForward></IoIosArrowForward>  {b.label}
                    
                </Link> ))}
            </React.Fragment>
        )
    } 

    const goBack = () =>{

        var path = "/"
        if(currentPage && currentPage.breadCrumbs && currentPage.breadCrumbs.length > 0 ){
            path = currentPage.breadCrumbs[currentPage.breadCrumbs.length - 2]
        }
        return history.push(path.value)
    }

    return (
        <header className="common-header">
            <div className="common-header-content">
                <section>
                 

                    { currentPage && 
                        <React.Fragment>

                            { currentPage.breadCrumbs.length > 1 && <button className="common-header-back-btn" onClick={goBack}> 
                                <IoIosArrowBack></IoIosArrowBack>
                            </button>}

                            <div className="common-header-title">
                                { currentPage.title && <span className="common-header-title-label">{currentPage.title}</span>} 
                                { currentPage.breadCrumbs && <span className="common-header-title-bread-crumbs">{resolveBread()}</span>} 
                            </div>

                        </React.Fragment>
                    }

                </section>
                <section>
                    <ToggleButton onClick={toggle}></ToggleButton>
                </section>
            </div>
        </header>
    )
}