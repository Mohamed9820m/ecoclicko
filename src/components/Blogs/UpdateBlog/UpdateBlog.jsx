import axios from 'axios';
import React, { useState } from 'react'

function UpdateBlog({blogId}) {
    const[blogTitle, setTitle]= useState("");
    const[blogContent, setContent]= useState("");
    const[blogCategory,setCategory] =useState("");
    const[blogImage,setImage]= useState("");
      
    const cloud_name =  process.env.REACT_APP_CLOUD_Name;
    const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
  
    const imageUpload=async()=>{
        const {files} =document.querySelector(".userProfileImageUpload2");
        const formData = new FormData();
        
        formData.append("file", files[0]);
        formData.append("upload_preset", upload_preset);
            const options={
            method:"POST",
            body: formData,
        };
        fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            options 
        )
            .then((res)=> res.json())
            .then((res)=> setImage(res.secure_url))
            .catch((err)=>console.log(err));
            alert("Image uploaded !");
    }
  
    const putBlog=()=>{
        axios.put(`http://127.0.0.1:5000/api/blog/update/${blogId}`,{
            blogTitle,
            blogContent,
            blogImage,
            blogCategory
        }).then((res)=>{
            console.log("Posted data ==> ",res);
        }).catch((error)=>{
            console.log("Post error ==> ",error);
        })
  
  }
    return (  
        <div className="content">
        <div className="addBlogMain">
              <div className="addBlogForm">
                  <form className="addBlogFormInputs">
                      <input className="addBlogEachInput" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} required></input>
                      <input className="addBlogEachInput" placeholder="category" onChange={(e)=>{setCategory(e.target.value)}} required></input>
                      <textarea className="addBlogEachInput" placeholder="Content" onChange={(e)=>{setContent(e.target.value)}} required></textarea>
                  <div className="userProfileImageUpload">
                      <input type="file" id="image" className="userProfileImageUpload2" required/>
                      <img className="userProfileImagePalce" src={blogImage||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiEN99uJPX37lOwqYmPy_xs5z8auvTFOANdR7jaxOuA-ItMB8MGPXO45zTpEbZJ_jnvw&usqp=CAU"} alt="AltImage"/>
                      <button className="userProfileUploadButton" onClick={imageUpload}>Upload Your Image</button>
                  </div>
                  <button className="addBlogSubmitButton" type="submit" onClick={putBlog}>Submit</button>
                  </form>
              </div>
          </div>
        </div>
    )
  }
  
export default UpdateBlog
