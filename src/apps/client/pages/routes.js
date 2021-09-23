import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

/* layout */
import PrimaryLayout from '../layouts/Primary-layout'
/* pages */
import HomePage from './Home'
import Login from './Login'
import NotFound from './NotFound'
/* guard */
import Guard from './RouteGuard';
function Routes (){
  return ( 
    <Router>
        <Switch>

          <Route path="/" exact> <Redirect to="/inicio" /> </Route>
          <Route path="/notfound" exact>  <NotFound> </NotFound></Route>

          <Guard path="/inicio" exact>
            <PrimaryLayout>
              <HomePage> </HomePage> 
            </PrimaryLayout>
          </Guard>

          <Guard path="/login" exact>  <Login> </Login></Guard>


          <Route path="/*" > <Redirect to="/notfound" /> </Route>  
          
        </Switch>

    </Router>
  )
}

export default Routes

