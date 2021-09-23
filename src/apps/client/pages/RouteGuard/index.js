import React, { useEffect, useState } from 'react'
import {  Route } from "react-router-dom";
import { useHistory, useLocation} from 'react-router-dom'
/* import { useDispatch, useSelector} from 'react-redux' */
/* import { authService as AuthMart} from '../../services/mart-login-service'
import { authService as AuthAdmin} from '../../services/admin-login-service'
import { setMart, setAdmin, setLoading } from '../../store/reducers/global/actions'
 */

export function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, location.pathname, location.hash]);

  return null;
}

const Guard = ({ access, location, component: Component, path, ...rest } ) => {



 
/* 

/*   const history = useHistory() */
/*   const dispatch = useDispatch() */
/*   const { mart, admin }  = useSelector(state=>state.global)  */


/* 
  const login = async () => {
Promise.all([  
      !mart &&
      AuthMart()
        .then(r=>dispatch(setMart(r)))
        .catch( err => console.log(err)),  
      !admin &&
      AuthAdmin()
        .then(r=>dispatch(setAdmin(r)))
        .catch( err => console.log(err))
    ])
    .finally(() =>{ 
      dispatch(setLoading(false)) 
    }) 
  } */

  return (
    <React.Fragment>
      <ScrollToTop></ScrollToTop>
      <Route location={location} {...rest} render={(props) => ( <Component { ...props } path={path} /> )} ></Route>
    </React.Fragment>
    )

}


export default Guard