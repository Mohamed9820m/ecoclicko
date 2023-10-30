import React, { useState, useEffect } from 'react'
import LandingScreen from '../components/Landing/LandingScreen'
import Loader from '../constants/Loader';
import { Helmet } from 'react-helmet-async';

export const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
   <>
   <Helmet>
    <title>Home-Ecoclicko</title>
    <meta name="description" content="This is the home page of ecoclicko"/>
    <link rel='canonical' href='/home' />
   </Helmet>
    {isLoading ? (
       <Loader />
      ) : (
   <LandingScreen />
   )}
   </>
  )
}
