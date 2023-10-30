import React from "react";
import Register from "../components/Register/Register";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register-Ecoclicko</title>
        <meta name="description" content="Create your ecoclicko account " />
        <link rel="canonical" href="/register" />
      </Helmet>
      <Register />
    </>
  );
};

export default RegisterPage;
