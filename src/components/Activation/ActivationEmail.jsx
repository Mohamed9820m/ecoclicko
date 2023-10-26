import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import 'sweetalert2/dist/sweetalert2.min.css';

export default function ActivationEmail() {
  const { activationcode } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios
      .post(`https://ecoclicko.onrender.com/api/Users/verify/${activationcode}`)
      .then((response) => {
        console.log(response)
        const { token } = response.data;
        console.log('Token:', token);
        setToken(token);
        Cookies.set('token', token);

        Swal.fire({
          icon: 'info',
          title: 'Congratulations!',
          text: 'Your account is active.',
          didClose: () => {
            navigate('/');
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.error('Error:', error);
      });
  }, [activationcode, navigate]);

  return null;
}
