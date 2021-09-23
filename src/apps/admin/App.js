import React, { Component, useEffect } from 'react';
import '../../assets/styles/root.css'
import '../../assets/styles/fonts.css'
import './app.css'
import Routes from './routes/index.js'
import { ADMIN_PAGES, PAGES_STRUCT } from './pagesManifest'
import WarningDialog from '../../components/utils/Dialog/presentation/WarningDialog' 
import { closeWarning } from '../../store/reducers/dialogs/actions'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const dispatch = useDispatch()
  const { warning } = useSelector(state=>(state.dialogs))
  return (
    <div className="App">
      <Routes pages={ADMIN_PAGES} struct={PAGES_STRUCT}></Routes>   
      <WarningDialog config={warning} onClose={()=>dispatch(closeWarning())}></WarningDialog>  
    </div>
  );

}
