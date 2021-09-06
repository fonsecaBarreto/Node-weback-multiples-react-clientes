import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

/* layout */
import PrimaryLayout from '../layouts/Primary-layout'
/* pages */
import HomePage from './Home'
import Login from './Login'
import NotFound from './NotFound'

/* guard */
function Routes (){
  return ( 
    <Router>

 
      <Switch>

        <Route path="/" exact> <Redirect to="/inicio" /> </Route>

        <Route path="/inicio" exact>
          <PrimaryLayout>
            <HomePage> </HomePage> 
          </PrimaryLayout>
        </Route>

        <Route path="/login" exact>  <Login> </Login></Route>

        <Route path="/notfound" exact>  <NotFound> </NotFound></Route>

        <Route path="/*" > <Redirect to="/notfound" /> </Route>  
        
      </Switch>
    </Router>
  )
}

export default Routes

