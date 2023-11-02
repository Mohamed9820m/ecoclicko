import React, { useState } from "react";
import Sidebar from '../../../Admin/components/Sidebar';
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import axios from "axios";
import "./AddBlog.css";
import ReactQuill from 'react-quill'; // Import ReactQuill

function AddBlog() {
  const [blogTitle, setTitle] = useState("");
  const [blogContent, setContent] = useState("");
  const [blogCategory, setCategory] = useState("Case Study");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setLoading] = useState(false); 

  const cloud_name = "djl7btyt5";
  const upload_preset = "mohamedha";

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("Case Study"); // Setting a default category value
    setSelectedImage(null);
    document.querySelector(".userProfileImageUpload2").value = null;
  };

  const createBlog = async () => {
    if (!selectedImage) {
      alert("Please select an image");
      return;
    }

    setLoading(true); // Set loading to true when the process starts

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
        }).finally(() => {
          setLoading(false); // Set loading to false when the process ends
        });
      } else {
        console.log("Error uploading image.");
        setLoading(false); // Set loading to false on error
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false); // Set loading to false on error
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
      ['clean'],
      [{ 'color': [] }]
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link','color'
  ];

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
                <input
                  className="addBlogEachInput"
                  placeholder="Title"
                  value={blogTitle}
                  onChange={(e) => { setTitle(e.target.value) }}
                  required
                ></input>
                <select
                  className="addBlogEachInput"
                  id="category"
                  name="category"
                  onChange={(e) => { setCategory(e.target.value) }}
                  value={blogCategory}
                >
                  <option value="Case Study">Case Study</option>
                  <option value="Education Learning">Education Learning</option>
                </select>
                <ReactQuill
                  theme="snow"
                  value={blogContent}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  placeholder="Write your blog content here..."
                />
                <div className="userProfileImageUpload">
                  <input
                    type="file"
                    id="image"
                    className="userProfileImageUpload2"
                    onChange={handleImageChange}
                    required
                  />
                  {selectedImage && (
                    <img
                      className="userProfileImagePalce"
                      src={selectedImage}
                      alt="SelectedImage"
                    />
                  )}
                </div>
                <button className="addBlogSubmitButton" type="button" onClick={createBlog}>
                  {isLoading ? (
                    <span className="loader"></span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
