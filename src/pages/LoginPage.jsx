import React from 'react'
import Login from '../components/Login/Login'
import { Helmet } from 'react-helmet-async'

const LoginPage = () => {
  return (
    <>
       <Helmet>
    <title>Login-Ecoclicko</title>
    <meta name="description" content="Login to your ecoclicko account "/>
    <link rel='canonical' href='/login' />
   </Helmet>
    <Login />
    </>
  )
}

export default LoginPage