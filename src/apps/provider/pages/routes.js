import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import DashBoard from './DashBoard'
import Adicionar from './Adicionar'


/* guard */
function Routes (){
  return ( 
    <Router>

        <nav>
            <Link to="/provider/dashboard"> DASH BOARD </Link>
            <Link to="/provider/add"> ADICONAR NOVO</Link>
        </nav>
 
      <Switch>
        <Route path="/provider" exact> <Redirect to="/provider/dashboard" /> </Route>
        <Route path="/provider/dashboard" exact>  <DashBoard> </DashBoard></Route>
        <Route path="/provider/add" exact>  <Adicionar> </Adicionar></Route>
      </Switch>
    </Router>
  )
}

export default Routes

