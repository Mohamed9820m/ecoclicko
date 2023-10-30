import React, { useState, useEffect } from 'react';
import ServicesScreen from '../components/Services/ServicesScreen';
import Loader from '../constants/Loader';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
          <Helmet>
    <title>Services-Ecoclicko</title>
    <meta name="description" content="This the services page of ecoclicko"/>
    <link rel='canonical' href='/services' />
   </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <ServicesScreen />
      )}
    </>
  );
};

export default Services;
