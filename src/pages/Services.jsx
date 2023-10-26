import React, { useState, useEffect } from 'react';
import ServicesScreen from '../components/Services/ServicesScreen';
import Loader from '../constants/Loader';

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
      {isLoading ? (
        <Loader />
      ) : (
        <ServicesScreen />
      )}
    </>
  );
};

export default Services;
