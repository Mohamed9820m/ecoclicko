const Blog =require ("../database/models/BlogModel")
module.exports = {
    createBlgo: (req, res) => {
      const { blogTitle, blogContent, blogImage,blogCategory } = req.body;
      const adminId = req.params.adminId; 
  
      Blog.create({ blogTitle, blogContent, blogImage,blogCategory, adminId })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
  
    getAllBlog: (req, res) => {
      Blog.findAll()
        .then(result => {
          res.status(200).send(result); 
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    getOneBlog: (req, res) => {
      Blog.findAll({where:{id:req.params.blogId}})
        .then(result => {
          res.status(200).send(result); 
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },

  updateBlog: (req, res) => {
    const updatedData = {
      blogTitle: req.body.blogTitle,
      blogContent: req.body.blogContent,
      blogImage: req.body.blogImage,
    };
  
    const blogId = req.params.blogId;
  
    Blog.update(updatedData, {
      where: { id: blogId }, 
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
deleteBlog: (req, res) => {
  const blogId = req.params.blogId;

  Blog.destroy({
    where: { id: blogId },
  })
    .then((respense) => {
        res.json({respense});
      })
    .catch((error) => {
      res.status(500).json({error});
    });
},
}