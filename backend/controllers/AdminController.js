const Admin =require('../database/models/AdminModel')
module.exports={
    getAdmin:(req,res)=>{
        Admin.findAll()
        .then(result => {
            res.status(200).send(result); 
          })
          .catch(err => {
            res.status(500).send(err);
          });
    }
}