import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import PartnershipScreen from '../components/Partnership/PartnershipScreen';


export const Partners = () => {

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
 <PartnershipScreen />
   )}
   </>
  )
}
