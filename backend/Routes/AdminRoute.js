const router =require('express').Router()
const {getAdmin}=require('../controllers/AdminController')

router.get('/',getAdmin)


module.exports=router