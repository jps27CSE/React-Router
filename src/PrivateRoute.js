import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Auth from './auth'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={(props)=>(
        Auth.isLogin 
        ? <Component {...props}/>
        : <Redirect to={{
            pathname:'/login',
            state: {from: props.location}
        }} />
    )} />
)

export default PrivateRoute