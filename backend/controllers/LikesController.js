const Likes =require ("../database/models/LikesModel");
const Users = require("../database/models/UsersModel");
const Blog = require("../database/models/BlogModel");
module.exports = {
    createLike: (req, res) => {
      const like = true
      const {blog_id,users_id}  = req.params; 
      console.log(blog_id,users_id)
      Likes.create({ like, blog_id, users_id  })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
        
    },
  

 
    deleteLike: (req, res) => {
      const { users_id, blog_id } = req.params;
  
      Likes.destroy({
        where: {
          users_id,
          blog_id
        }
      })
        .then(response => {
          if (response === 1) {
            res.json({ message: 'Like deleted successfully' });
          } else {
            res.status(404).json({ message: 'Like not found' });
          }
        })
        .catch(error => {
          res.status(500).json({ error });
        });
    },
    getAllLikes: (req, res) => {
      const { users_id, blog_id } = req.params;
      Likes.findAll({
        where: {
          users_id,
          blog_id
        }
      })
      .then(result => {
        res.status(200).send(result); 
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getBlogLikes: (req, res) => {
    const  blog_id  = req.params.blog_id
    Likes.findAll({
  
          where:{blog_id:blog_id}
        

    })
    .then(result => {
      res.status(200).send(result); 
    })
    .catch(err => {
      res.status(500).send(err);
    });
},
}