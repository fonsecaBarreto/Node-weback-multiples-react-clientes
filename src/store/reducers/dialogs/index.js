import React from  'react'
const INITIAL_STATE = {
  warning: {
    title:"",
    content:(<span></span>),
    show:false, 
    onResult: () => {}
  },
 
}

export const dialogsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET_WARNING": return { ...state, warning: { ...action.payload } };
    case "CLOSE_WARNING": return  { ...state, warning: { ...INITIAL_STATE.warning } };
    default: return state
  }
}