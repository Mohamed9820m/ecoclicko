import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import UnitsScreen from '../components/Units/UnitsScreen';
import { Helmet } from 'react-helmet-async';

export const Units = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
   <>
    <Helmet>
    <title>Units-Ecoclicko</title>
    <meta name="description" content="Our platform offers five units for kids aged 6 to 16 each focusing on a sustainability topic. "/>
    <link rel='canonical' href='/units' />
   </Helmet>
    {isLoading ? (
       <Loader />
      ) : (
   <UnitsScreen />
   )}
   </>
  )
}
