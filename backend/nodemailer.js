const nodemailer = require("nodemailer");
const user = "clickoeco@gmail.com"; 
const pass = "zenaelyujouekkrm";  

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});
module.exports.sendConfirmationEmail = (
  email,
  confirmationCode,
) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Veuillez activer votre compte ",
      html:`
      <div style="background-color: #f3f3f3; padding: 20px; text-align: center; font-family: Arial, sans-serif; border: 2px solid black; border-radius: 15px;">
      <div style="background-color: white; padding: 20px; border-radius: 10px; max-width: 500px; margin: 0 auto;">
        <img src="https://i.ibb.co/XDyHSfJ/Logo.png" alt="Logo" style="max-width: 150px; margin-bottom: 10px;" />
    
        <h1 style="color: #333;">Account Activation</h1>
    
        <p style="color: #555;">Click Here To Confirm Your Email :</p>
    
        <a href="http://localhost:3000/confirm/${confirmationCode}" style="background-color: #009e00; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">Click Here To Activate.</a>
      </div>
    </div>
    
    `,
    })
    .catch((err) => {
        console.log('Error sending email:', err);
        res.status(500).json({ message: 'Error sending confirmation email' });
      });
      
};


module.exports.sendPasswordResetEmail = (email, resetCode) => {
    transport
      .sendMail({
        from: user,
        to: email,
        subject: "Password Reset",
        html: `
        <div style="background-color: #f3f3f3; padding: 20px; text-align: center; font-family: Arial, sans-serif; border: 2px solid black; border-radius: 15px;">
        <div style="background-color: white; padding: 20px; border-radius: 10px; max-width: 500px; margin: 0 auto;">
          <img src="https://res.cloudinary.com/audasoft-technology/image/upload/v1669470792/gtz25n1imuwkj1ybbahp.jpg" alt="Logo" style="max-width: 150px; margin-bottom: 10px;" />
      
          <h1 style="color: #333;">Password Reset</h1>
      
          <p style="color: #555;">To reset your password, please click on the link below:</p>
      
          <a href="http://localhost:3000/reset-password/${resetCode}" style="background-color: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">Click here to reset your password</a>
        </div>
      </div>
        `,
      })
      .catch((err) => {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Error sending password reset email' });
      });
  };
  