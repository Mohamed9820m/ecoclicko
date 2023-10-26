const router=require("express").Router()
const {getAllBlog, createBlgo, deleteBlog, updateBlog, getOneBlog} =require('../controllers/BlogController')

router.get('/getAll',getAllBlog)
router.get('/getone/:blogId',getOneBlog)
router.post('/addBlog/:adminId',createBlgo)
router.delete('/deleteBlog:blogId',deleteBlog)
router.put('/update/:blogId',updateBlog)


module.exports=router