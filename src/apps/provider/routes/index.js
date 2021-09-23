import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import UseLocationCallBack from '../../../components/utils/useLocationCallBack'
import RouterHandler from '../../../components/RouterHandler'
import ProviderLayout from '../layouts/ProviderLayout'

function Routes({ pages, struct}){
 	const routerState = RouterHandler(struct, '/provider/panel')
	const { currentPage } = routerState 

	const withAdminLayout = Object.keys(pages).map((p,i)=>{
		const { path, componenet: Component} = pages[p]
		return (
			<Route path={path} exact key={i}>  
				<Component> </Component>
			</Route>
		)
	});

	const setPathname = (location) =>{
		routerState.setPathname(location.pathname)
	}

	return ( 
		<Router>
		 	 <UseLocationCallBack callback={setPathname}></UseLocationCallBack>   
				<Switch>
					<Route path="/provider" exact> <Redirect to="/provider/panel" /> </Route>,
					<ProviderLayout struct={struct} currentPage={currentPage} >
						{ withAdminLayout }
					</ProviderLayout>
				
		
				</Switch>
		</Router>
	)
}

export default Routes

