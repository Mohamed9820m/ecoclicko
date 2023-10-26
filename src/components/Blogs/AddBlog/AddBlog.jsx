import React, { useState } from "react";
import Sidebar from '../../../Admin/components/Sidebar';
import '../../../Admin/Dashbord.css';
import axios from "axios";
import "./AddBlog.css";

function AddBlog() {
  const [blogTitle, setTitle] = useState("");
  const [blogContent, setContent] = useState("");
  const [blogCategory, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const cloud_name = "djl7btyt5";
  const upload_preset = "mohamedha";

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("");
    setSelectedImage(null);
    document.querySelector(".userProfileImageUpload2").value = null; 
  };

  const createBlog = async () => {
    if (!selectedImage) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", document.querySelector(".userProfileImageUpload2").files[0]);
    formData.append("upload_preset", upload_preset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        
        axios.post("https://ecoclicko.onrender.com/api/blog/addBlog/1", {
          blogTitle,
          blogContent,
          blogImage: data.secure_url,
          blogCategory
        }).then((res) => {
          console.log("Posted data ==>", res);
          alert("Blog created successfully!");
          resetForm(); 
        }).catch((error) => {
          console.log("Post error ==>", error);
        });
      } else {
        console.log("Error uploading image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <div className="addBlogMain">
            <div className="addBlogTitle">
              <h3>Create a Blog</h3>
            </div>
            <div className="addBlogForm">
              <form className="addBlogFormInputs">
                <input className="addBlogEachInput" placeholder="Title" value={blogTitle} onChange={(e) => { setTitle(e.target.value) }} required></input>
                      <select
          className="addBlogEachInput"
          id="category"
          name="category"
          onChange={(e) => { setCategory(e.target.value) }}
          value={blogCategory}
        >
          <option value="Case Study ">Case Study </option>
          <option value="Education Learning">Education Learning</option>
        </select>            
                <textarea className="addBlogEachInput" placeholder="Content" value={blogContent} onChange={(e) => { setContent(e.target.value) }} required></textarea>
                <div className="userProfileImageUpload">
                  <input type="file" id="image" className="userProfileImageUpload2" onChange={handleImageChange} required />
                  {selectedImage && (
                    <img className="userProfileImagePalce" src={selectedImage} alt="SelectedImage" />
                  )}
                </div>
                <button className="addBlogSubmitButton" type="button" onClick={createBlog}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog;
