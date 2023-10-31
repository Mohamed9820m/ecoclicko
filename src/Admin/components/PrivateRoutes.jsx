import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes({reload}) {

    let auth = localStorage.getItem('auth')
    console.log('auth',auth)
    return(
  auth ? <Outlet/> : <Navigate to="/logDashboard"/>
    )
}

export default PrivateRoutes
