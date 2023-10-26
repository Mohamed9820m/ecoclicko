import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import Blogs from '../components/Blogs/Blogs';

export const EcoBlogs = () => {

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
   <Blogs />
   )}
   </>
  )
}
