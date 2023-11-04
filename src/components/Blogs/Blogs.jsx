import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogDetails from './BlogDetails';
import '../Blogs/BlogsStyle.css'
import FamTestimonials from '../../constants/FamTestimonials';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://ecoclicko.onrender.com/api/Blog/getAll');
      setData(res.data);
      setLoading(false); 
    } catch (err) {
      console.error(err);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = selectedCategory === 'All Category'
    ? data
    : data.filter((el) => el.blogCategory === selectedCategory);

  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div>
            <select
              className="category"
              id="category"
              name="category"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="All Category">All Category</option>
              <option value="Case Study">Case Study</option>
              <option value="Education Learning">Education Learning</option>
            </select>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {loading ? ( // Show a loader while data is being fetched
              <div className="loader1"></div>
            ) : (
              filteredData.map((el) => (
                <BlogDetails key={el.id} data={el} />
              ))
            )}
          </div>
        </div>
      </div>
      <FamTestimonials />
    </>
  );
};

export default Blogs;
