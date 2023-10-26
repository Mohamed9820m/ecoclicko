const Comments =require ("../database/models/CommentsModel");
const Users = require("../database/models/UsersModel");
const Blog = require("../database/models/BlogModel");
module.exports = {
  createComment: (req, res) => {
    const comment = req.body.comment;
    const { blog_id, users_id } = req.params;
    console.log('Received blog_id:', blog_id);
  console.log('Received users_id:', users_id);
    Comments.create({ comment, blog_id, users_id })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  
  
    getAllCommnets: (req, res) => {
        const blog_id=req.params.blog_id
        Comments.findAll({
            include:[
               {
                  model:Users,
                  attributes: ['id','userName','image']
               },
               {
                  model:Blog,
                 where:{id:blog_id}
               }
            ]
         })
        .then(result => {
          res.status(200).send(result); 
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },

 
deleteCommnet: (req, res) => {
  const commentId = req.params.commentId;

  Comments.destroy({
    where: { id: commentId },
  })
    .then((respense) => {
        res.json({respense});
      })
    .catch((error) => {
      res.status(500).json({error});
    });
},
updateComment:(req,res)=>{
  const commentId = req.params.commentId;
  const comment=req.body.comment
  Comments.update({ comment: comment },{
    where:{id:commentId}
  })
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
},
getAllCommnetsToAdmin: (req, res) => {
  Comments.findAll({
    where: { approved: false }, 
    include: [
      {
        model: Users,
        attributes: ['id', 'userName', 'image'],
      },
      {
        model: Blog,
        attributes: ['id', 'blogTitle'],
      },
    ],
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
},
approveComment:(req,res)=>{
  const commentId = req.params.commentId;
  Comments.update({ approved: true },{
    where:{id:commentId}
  })
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
},

}