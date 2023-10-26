import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import test1 from '../../assets/images/test3.png';
import BubblyButton from '../../constants/BubblyButton';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const passwordInputType = showPassword ? 'text' : 'password';

  const isNameValid = () => {
    const namePattern = /^[a-zA-Z]{3,}$/;
    return namePattern.test(userName);
  };

  const isEmailValid = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(userEmail);
  };

  const isPasswordValid = () => {
    const passwordPattern = /^(?=.*)(?=.*\d).{8,}$/;
    return passwordPattern.test(userPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userName || !userEmail || !userPassword || !image) {
      Swal.fire('All fields and image are required.');
      return;
    }

    if (!isEmailValid()) {
      Swal.fire('Please enter a valid email.');
      return;
    }

    if (!isPasswordValid()) {
      Swal.fire('Password must be at least 8 characters');
      return;
    }

    if (!isNameValid()) {
      Swal.fire('Please enter a valid Name');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'mohamedha');

      const responseImageUpload = await axios.post(
        'https://api.cloudinary.com/v1_1/djl7btyt5/image/upload',
        formData
      );
      console.log('responseImageUpload.data.secure_url', responseImageUpload.data.secure_url);

      const user = {
        userName,
        userEmail,
        userPassword,
        image: responseImageUpload.data.secure_url,
      };

      const responseUserRegister = await axios.post('http://127.0.0.1:5000/api/Users/register', user);

      console.log('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response && error.response.status === 400) {
        Swal.fire('Email already exists');
      } else {
        Swal.fire('Registration failed. Please try again.');
      }
    }
  };

  return (
    <>
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
                      <h1 className="mb-5 custom-heading text-center">Sign up</h1>
                      <p className="my-2 text-center">Sign up and start interacting</p>

                      {image && (
                        <div className="avatar-upload">
                          <div className="avatar-preview">
                            <div style={{ backgroundImage: `url(${URL.createObjectURL(image)})` }}></div>
                          </div>
                        </div>
                      )}

                      <form className="login-form mt-4 text-start">
                        <div className="mb-4 position-relative">
                          <input
                            type="text"
                            className="form-control no-border"
                            placeholder="Full Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                          <div className="green-line"></div>
                        </div>

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

                        <div className="mb-4 justify-content-center d-flex">
                          <label htmlFor="fileInput" className="custom-file-button">
                            Upload Image
                          </label>
                          <input
                            id="fileInput"
                            type="file"
                            className="custom-file-input"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </div>

                        <div className="mb-4 d-sm-flex justify-content-center link-group1">
                          <p className="mb-2">
                            Already have an account? <Link to="/Login" style={{ textDecoration: 'underline' }}>SignIn</Link>
                          </p>
                        </div>

                        
                          <button type='sumbit' className='mainBtn d-flex mx-auto' onClick={handleSubmit}>Signup →</button>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;