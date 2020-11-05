import React, { useContext, useReducer } from 'react'

///////////////////
// initial state
//////////////////
const initialState = {
    url: "http://ruby-on-rails-usernotes-app.herokuapp.com"
}
/////////////
// readucer
////////////
const reducer= (state,action)=>{
    switch(action.type){
        default:
            return state
    }
}
/////////////////
// appcontext
////////////////
const AppContext = React.createContext(null)
/////////////////////
//AppState Component
/////////////////////
export const AppState = (props)=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return <AppContext.Provider value={{state,dispatch}}>{props.children}</AppContext.Provider>
}
///////////////////////
// useAppState hook
//////////////////////
export const useAppState=()=>{
    return React.useContext(AppContext)
}
