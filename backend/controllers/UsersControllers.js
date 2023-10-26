const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../database/models/UsersModel');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
// const axios = require ('axios')
const crypto = require('crypto');


const { sendConfirmationEmail } = require('../nodemailer');

const registerUser = async (req, res) => {


  const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomCode = "";
    for (let i = 0; i < 25; i++) {
      randomCode += characters[Math.floor(Math.random() * characters.length)];
    }


  const { userName, userEmail, userPassword,image } = req.body;
  try {
    const existingUser = await User.findOne({ where: { userEmail } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email address is already in use' });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = await User.create({
      userName,
      userEmail,
      userPassword: hashedPassword,
      image,
      activationcode:randomCode
    });

    await sendConfirmationEmail(userEmail, randomCode);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};



const loginUser = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
    const user = await User.findOne({ where: { userEmail } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id ,  isvalid: user.isvalid }, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};





const getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found2' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



const generateToken = (user) => {
  const token = jwt.sign(
    {
      userId: user.id,
      isvalid: user.isvalid
    },
    'your-secret-key',
    { expiresIn: '1h' }
  );
  return token;
};

const verifyuser = async (req, res) => {
  const activation = req.params.activationcode;

  try {
    const user = await User.findOne({ where: { activationcode: activation } });

    if (!user) {
      return res.status(404).json({ message: 'Activation code not found' });
    }

    await user.update({ isvalid: true });

    const token = generateToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000,
    });

    console.log('Generated', token);

    res.status(200).json({ message: 'User activated successfully', token });
  } catch (error) {
    console.error('Error verifying user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const forget = async (req,res)=>{
  const { userEmail } = req.body;

  try {
    const user = await User.findOne({ where: { userEmail } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = uuidv4();

    await user.update({ resetPasswordToken: resetToken });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "clickoeco@gmail.com", 
        pass: "zenaelyujouekkrm"  
      }
    });

    const mailOptions = {
      from: 'clickoeco@gmail.com', 
      to: userEmail,
      subject: 'Password Reset',
      html: `
      <div style="background-color: #f3f3f3; padding: 20px; text-align: center; font-family: Arial, sans-serif; border: 2px solid black; border-radius: 15px;">
      <div style="background-color: white; padding: 20px; border-radius: 10px; max-width: 500px; margin: 0 auto;">
        <img src="https://i.ibb.co/XDyHSfJ/Logo.png" alt="Logo" style="max-width: 150px; margin-bottom: 10px;" />
    
        <h1 style="color: #333;">Password Reset</h1>
    
        <p style="color: #555;">To reset your password, please click on the link below:</p>
    
        <a href="https://ecoclicko.info/reset-password/${resetToken}" style="background-color: #009e00; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">Click here to reset your password</a>
      </div>
    </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending password reset email:', error);
        return res.status(500).json({ success: false });
      } else {
        console.log('Password reset email sent:', info.response);
        return res.status(200).json({ success: true });
      }
    });
  } catch (error) {
    console.error('Error initiating password reset:', error);
    return res.status(500).json({ success: false });
  }
}


const resetPassword = async (req, res) => {
  const { newPassword } = req.body;
  const resetToken = req.params.resetToken; 

  try {
    const user = await User.findOne({ where: { resetPasswordToken: resetToken } });
    if (!user) {
      return res.status(404).json({ message: 'expired reset token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ userPassword: hashedPassword, resetPasswordToken: null });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};



const add = async (req, res) => {

  const url = 'https://sandbox.paymee.tn/api/v2/payments/create';

  const payload = {
    "amount": req.body.amount,
    "note": "Order #123",
    "first_name": "John",
    "last_name": "Doe",
    "email": "test@paymee.tn",
    "phone": "+21611222333",
    "return_url": "https://www.return_url.tn",
    "cancel_url": "https://www.cancel_url.tn",
    "webhook_url": "https://www.webhook_url.tn",
    "order_id": "244557"
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Token 6f5a3910bccca75b0a47020247bf5f1a8e3b0254'  
  };

  try {
    const result = await axios.post(url, payload, { headers });
    res.send(result.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};




function md5(text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

const check = async (req, res) => {
  const checkToken = 'Token 6f5a3910bccca75b0a47020247bf5f1a8e3b0254';
  const paymentStatus = 1;

  const checkSumInput = checkToken + paymentStatus + checkToken;
  const checkSum = md5(checkSumInput);

  const checkUrl = `https://sandbox.paymee.tn/api/v2/payments/${checkToken}/check`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${checkToken}`,
    'check_sum': checkSum
  };

  try {
    const result = await axios.post(checkUrl, {}, { headers });
    res.send(result.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('An error occurred while fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

const deleteUser=(req,res)=>{
  const userId = req.params.userId;

  User.destroy({
    where: { id: userId },
  })
    .then((respense) => {
        res.json({respense});
      })
    .catch((error) => {
      res.status(500).json({error});
    });
};

const sendReservationConfirmation = async (req, res) => {
  const { name, email, phone } = req.body; 

  try {
    const clientMailOptions = {
      from: 'clickoeco@gmail.com',
      to: email,
      subject: 'Reservation Confirmation',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for your reservation request. We will process your reservation and get back to you shortly.</p>
        <p>Details provided:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>Best regards,</p>
        <p>EcoClicko</p>
      `
    };

    const yourMailOptions = {
      from: 'clickoeco@gmail.com',
      to: 'clickoeco@gmail.com', 
      subject: 'New Reservation Request',
      html: `
        <p>You have received a new reservation request.</p>
        <p>Details provided:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>
      `
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "clickoeco@gmail.com", 
        pass: "zenaelyujouekkrm"  
      }
    });

    await transporter.sendMail(clientMailOptions);

    await transporter.sendMail(yourMailOptions);

    res.status(200).json({ message: 'Reservation confirmation sent' });
  } catch (error) {
    console.error('Error sending reservation confirmation:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



const updateUsername = async (req, res) => {
  const userId = req.params.userId;
  const { newUsername } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.userName = newUsername;
    await user.save();

    return res.status(200).json({ message: 'Full name updated successfully' });
  } catch (error) {
    console.error('Error updating full name:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const updateBio = async (req, res) => {
  const userId = req.params.userId;
  const { newBio } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.userAboutMe = newBio;
    await user.save();

    return res.status(200).json({ message: 'Bio updated successfully' });
  } catch (error) {
    console.error('Error updating bio:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const updatePassword = async (req, res) => {
  const userId = req.params.userId;
  const { newPassword } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.userPassword = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const updateImage = async (req, res) => {
  const userId = req.params.userId;
  const { newImage } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.image = newImage;
    await user.save();

    return res.status(200).json({ message: 'Image updated successfully' });
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const deleteUserfromdb = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};







module.exports = {
  registerUser,
  loginUser,
  getUserById,
  verifyuser,
  forget,
  resetPassword,
  add,
  check,
  getUsers,
  sendReservationConfirmation,
  deleteUser,
  updateUsername,
  updateImage,
  updatePassword,
  updateBio,
  deleteUserfromdb
};
