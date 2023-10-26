import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import UnitsScreen from '../components/Units/UnitsScreen';

export const Units = () => {

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
   <UnitsScreen />
   )}
   </>
  )
}
