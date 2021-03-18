import React from 'react'
import {Link} from 'react-router-dom'
const Post =({match}) =>{
  return(
      <div>
        <h1>i am post {match.params.postID}</h1>
        <Link to='/'>Back to Home</Link>
      </div>
  )
}

export default Post