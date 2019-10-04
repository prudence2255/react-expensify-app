import React from 'react'
import {Link} from 'react-router-dom'

 const notFound = () => (
    <div>
        <p>NOt Found</p>
        <Link to="/" >Go home</Link>
    </div>
)

export default notFound;