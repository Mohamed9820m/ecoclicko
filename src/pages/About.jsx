import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import AboutScreen from '../components/AboutScreen/AboutScreen';

export const About = () => {

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
   <AboutScreen />
   )}
   </>
  )
}
