import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import { Helmet } from 'react-helmet-async'

const BlogsPage = () => {
  return (
   <>
        <Helmet>
    <title>Blog-Ecoclicko</title>
    <meta name="description" content="This is the Blogs page of ecoclicko"/>
    <link rel='canonical' href='/login' />
   </Helmet>
   <Blogs />
   </>
  )
}

export default BlogsPage