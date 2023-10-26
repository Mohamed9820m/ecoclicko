const express = require('express');
const router = express.Router();
const verifyAuth = require('../middleware/VerifyAuth.js')
const { logIn,signUp,signOut,checkAuthUser } = require('../controllers/Authentication.js');


router.post('/signout', signOut);
router.post('/signin', logIn);
router.post('/signup',signUp)
router.get('/checkAuth',verifyAuth,checkAuthUser )


module.exports = router;
