import React,{Component} from 'react'
import Auth from '../auth'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        redirect : false
    }

    login = () =>{
        Auth.login(()=>{
            this.setState({redirect: true})
        })
    }

    render(){
       if(Auth.isLogin) return <Redirect to='/'/>
       let {from} =this.props.location.state ||{from: {pathname: '/'}}
       if (this.state.redirect) return <Redirect  to={from}/>

       return(
           <div>
               Please login
               <button onClick={this.login}>Login</button>
           </div>
       )
    }

}

export default Login