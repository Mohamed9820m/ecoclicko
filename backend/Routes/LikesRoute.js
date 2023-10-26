const router =require('express').Router()
const {getAllLikes, createLike, deleteLike, getBlogLikes}=require('../controllers/LikesController')
router.get('/getLike/:blog_id/:users_id',getAllLikes)
router.get('/getOneLike/:blog_id',getBlogLikes)
router.post('/like/:blog_id/:users_id',createLike)
router.delete('/dislike/:blog_id/:users_id',deleteLike)


module.exports=router