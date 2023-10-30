import React, { useState, useEffect } from 'react'
import Loader from '../constants/Loader';
import Blogs from '../components/Blogs/Blogs';
import { Helmet } from 'react-helmet-async';

export const EcoBlogs = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
   <>
    <Helmet>
    <title>Blogs-Ecoclicko</title>
    <meta name="description" content="Explore insightful and informative blog posts on a wide range of topics. Our blog page offers expert perspectives and helpful tips."/>
    <link rel='canonical' href='/ecoblogs' />
   </Helmet>
    {isLoading ? (
       <Loader />
      ) : (
   <Blogs />
   )}
   </>
  )
}
