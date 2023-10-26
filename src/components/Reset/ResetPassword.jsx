import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePasswordReset = async () => {
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/Users/reset-password/${resetToken}`, {
        newPassword
      });

      if (response.data && response.data.success) {
        alert('Password reset successfully!');
        navigate('/');
      } else {
        alert('Failed to reset password. Please try again later.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <input type="password" placeholder="New Password" value={newPassword} onChange={handlePasswordChange} />
      <button onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
};

export default ResetPasswordPage;
