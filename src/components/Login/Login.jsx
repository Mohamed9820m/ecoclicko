import React, { useState } from 'react';
import test1 from '../../assets/images/test3.png';
import '../../components/Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import jwt_decode from 'jwt-decode';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordInputType = showPassword ? 'text' : 'password';

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/Users/login', {
        userEmail,
        userPassword,
      });

      if (response.data && response.data.token) {
        const token = response.data.token;

        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;
        const isvalid = decodedToken.isvalid;

        if (isvalid) {
          Cookies.set('token', token, { expires: 1 });
          if (response.status === 200) {
            navigate('/');
            window.location.reload()
            Swal.fire({
              icon: 'success',
              title: 'Login Succeeded',
              showConfirmButton: false,
              timer: 2000
            });
          }
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Check your email',
            text: 'Please check your email for verification.',
          });
          return;
        }
      } else {
        console.error('Token not found in response:', response.data);
        Swal.fire({
          icon: 'warning',
          title: 'An error occurred',
          text: 'An error occurred during login',
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        if (error.response.status === 404) {
          Swal.fire({
            icon: 'warning',
            title: 'User not found',
          });
        } else if (error.response.status === 401) {
          Swal.fire({
            icon: 'warning',
            title: 'Incorrect password',
          });
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'An error occurred',
            text: 'An error occurred during login',
          });
        }
      }
    }
  };

  const handlePasswordReset = async () => {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    });

    if (email) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/Users/forgot-password', {
          userEmail: email
        });

        if (response.data && response.data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Password reset email sent successfully!',
          });
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Failed to send password reset email',
          });
        }
      } catch (error) {
        console.error('Error sending password reset email:', error);
        Swal.fire({
          icon: 'warning',
          title: 'An error occurred',
          text: 'An error occurred while sending the password reset email',
        });
      }
    }
  };

  return (
    <section className="login-section vh-xxl-100">
      <div className="container h-100 d-flex px-0 px-sm-4">
        <div className="row justify-content-center align-items-center m-auto">
          <div className="col-12">
            <div className="login-content">
              <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                  <div className="vector-image p-3 p-lg-5">
                    <img src={test1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 order-1">
                  <div className="info-content p-4 p-sm-7">
                    <h1 className="mb-5 custom-heading text-center ">Sign in</h1>
                    <p className="my-2 text-center">Sign in and start interacting</p>

                    <form className="login-form mt-4 text-start">
                      <div className="mb-4 position-relative">
                        <input
                          type="email"
                          className="form-control no-border"
                          placeholder="Email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <div className="green-line"></div>
                      </div>

                      <div className="mb-5 position-relative">
                        <input
                          type={passwordInputType}
                          className="form-control no-border"
                          placeholder="Password"
                          value={userPassword}
                          onChange={handlePasswordChange}
                        />
                        <div className="green-line"></div>
                        <div className="toggle-eye" onClick={togglePasswordVisibility}>
                          {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
                        </div>
                      </div>

                      <div className="mb-5 d-sm-flex justify-content- link-group">
                        <p className="mb-0">
                          Don’t have an account?{' '}
                          <Link to="/Register" style={{ textDecoration: 'underline' }}>
                            SignUp
                          </Link>
                        </p>
                        <a href="#" onClick={handlePasswordReset} >Forgot password?</a>
                      </div>

                      
                      <button type='sumbit' className='mainBtn d-flex mx-auto' onClick={handleLogin}>Login →</button>
                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
