import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import PartnershipScreen from '../components/Partnership/PartnershipScreen';
import { Helmet } from 'react-helmet-async';


export const Partners = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
   <>
         <Helmet>
    <title>Partnership-Ecoclicko</title>
    <meta name="description" content="Explore our partnership opportunities and collaborations. Join forces with us to achieve mutual success. "/>
    <link rel='canonical' href='/partnership' />
   </Helmet>
    {isLoading ? (
       <Loader />
      ) : (
 <PartnershipScreen />
   )}
   </>
  )
}
