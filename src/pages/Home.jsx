import React, { useState, useEffect } from 'react'
import LandingScreen from '../components/Landing/LandingScreen'
import Loader from '../constants/Loader';

export const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
   <>
    {isLoading ? (
       <Loader />
      ) : (
   <LandingScreen />
   )}
   </>
  )
}
