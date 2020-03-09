import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error">
            <h2>page not found.</h2>
            <Link to="/">home</Link>
        </div>
    )
}

export default Error
