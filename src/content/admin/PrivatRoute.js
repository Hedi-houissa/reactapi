import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const PrivatRoute = ({ component: Component, isAuth, ...props }) => {
    if (!isAuth) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <Route render={() => <Component {...props} />} />
        </div>
    )
}

export default PrivatRoute
