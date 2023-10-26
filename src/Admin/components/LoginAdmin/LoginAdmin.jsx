import React, { useState } from 'react';
import test1 from '../../../assets/images/test3.png';
import BubblyButton from "../../../constants/BubblyButton";
// import '../../components/Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import jwt_decode from 'jwt-decode';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

function LoginAdmin() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
  
    const passwordInputType = showPassword ? 'text' : 'password';
    const handleLogin = async () => {
        try{
            const response =await axios.get("https://ecoclicko.onrender.com/api/Admin")
            const data=response.data[0]
            data.adminEmail===userEmail&&data.adminPassword===userPassword?navigate('/dashboard'):Swal.fire({
                icon: 'warning',
                title: 'Check your email/password',
                text:'please check your email or your password is wrong '
              });
        }catch(err){
            console.log(err)
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
                  <p className="my-2 text-center">welcome admin </p>

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
                        onChange={(e)=>{setUserPassword(e.target.value)}}
                      />
                      <div className="green-line"></div>
                      <div className="toggle-eye"  onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
                      </div>
                    </div>


                    <div className='button' onClick={handleLogin}>
                      <BubblyButton text="Login"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LoginAdmin
