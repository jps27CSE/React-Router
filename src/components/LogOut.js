import React,{Component} from 'react'
import Auth from '../auth'
import {Redirect} from 'react-router-dom'

class LogOut extends Component {
    state = {
        redirect : false
    }
    componentDidMount() {
        Auth.LogOut(()=>{
            this.setState({redirect: true})
        })
    }

    render(){
        if(this.state.redirect)
        {
            return <Redirect to='/'/>
        }
        else
        {
            return <h1>Loggin Out...</h1>
        }
    }

}

export default LogOut