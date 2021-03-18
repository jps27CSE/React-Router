import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>{
    return(
       <div>
            <h1>I am Home</h1>
            <Link to='/post/post-1'>Post 1</Link>
            <Link to='/post/post-3'>Post 3</Link>
            <Link to='/post/post-100'>Post 100</Link>
       </div>
    )
}

export default Home