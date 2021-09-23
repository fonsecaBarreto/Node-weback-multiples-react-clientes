import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import AdminLayout from '../layouts/AdminLayout';
import UseLocationCallBack from '../../../components/utils/useLocationCallBack'
import RouterHandler from '../../../components/RouterHandler'

function Routes({ pages, struct}){
 	const routerState = RouterHandler(struct, '/admin/panel')
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
					<Route path="/admin" exact> <Redirect to="/admin/panel" /> </Route>,

					<AdminLayout struct={struct} currentPage={currentPage}>
						{ withAdminLayout }
					</AdminLayout> 
		
				</Switch>
		</Router>
	)
}

export default Routes

