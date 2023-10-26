const express = require('express');
const userController = require('../controllers/UsersControllers');
const logTokenMiddleware = require('../middleware/tokenLogger');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', logTokenMiddleware, userController.loginUser);
router.get('/oneUser/:userId', userController.getUserById);
router.post('/verify/:activationcode',logTokenMiddleware,userController.verifyuser)
router.post('/forgot-password',userController.forget)
router.post('/reset-password/:resetToken', userController.resetPassword);
router.post('/payement', userController.add);
router.get('/payement/check', userController.check);
router.post('/Reservation', userController.sendReservationConfirmation);
router.get('/getAllUsers', userController.getUsers);
router.delete('/deleteUser:userId',userController.deleteUser)

router.put('/users/:userId/update-image', userController.updateImage);
router.put('/users/:userId/update-password', userController.updatePassword);
router.put('/users/:userId/update-bio', userController.updateBio);
router.put('/users/:userId/update-username', userController.updateUsername);
router.delete('/users/:userId/delete', userController.deleteUserfromdb);









module.exports = router;
