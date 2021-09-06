import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import DashBoard from './DashBoard'
import List from './List'

/* guard */
function Routes (){
  return ( 
    <Router>

        <nav>
            <Link to="/admin/dashboard"> DashBoard </Link>
            <Link to="/admin/list"> Listagem</Link>
            <a href="/"> INICIO</a>
        </nav>
 
      <Switch>

        <Route path="/admin" exact> <Redirect to="/admin/dashboard" /> </Route>
        <Route path="/admin/dashboard" exact>  <DashBoard> </DashBoard></Route>
        <Route path="/admin/list" exact>  <List> </List></Route>
        
      </Switch>
    </Router>
  )
}

export default Routes

