import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import AboutScreen from '../components/AboutScreen/AboutScreen';
import { Helmet } from 'react-helmet-async';

export const About = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
   <>
         <Helmet>
    <title>AboutUs-Ecoclicko</title>
    <meta name="description" content="Discover our story and mission at ecoclicko- Get to know the team behind the scenes and learn why we're passionate about what we do. Explore our journey today. "/>
    <link rel='canonical' href='/about' />
   </Helmet>
    {isLoading ? (
       <Loader />
      ) : (
   <AboutScreen />
   )}
   </>
  )
}
