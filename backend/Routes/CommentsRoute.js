const router =require('express').Router()
const {getAllCommnets, createComment, deleteCommnet, updateComment, getAllCommnetsToAdmin, approveComment}=require('../controllers/Comments')
router.get('/getComments/:blog_id',getAllCommnets)
router.post('/addComment/:blog_id/:users_id',createComment)
router.delete('/deleteComment/:commentId',deleteCommnet)
router.put('/update/:commentId',updateComment)
router.put('/approveComment/:commentId',approveComment)
router.get('/getCommentsToAdmin',getAllCommnetsToAdmin)

module.exports=router