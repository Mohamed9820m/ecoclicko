import Card from "react-bootstrap/Card";
/* import "./BlogCard.css";
 */import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import axios from "axios";
import { useState } from "react";
import UpdateBlog from "../Blogs/UpdateBlog/UpdateBlog";
import parse from 'html-react-parser';



function BlogDetails({ data,setReload,relode }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const urlContainsAdmin = window.location.href.includes('dashboard');

  const deleteBlog=(blogId)=>{
    const showDelete=window.confirm(  "Are you sure you want to delete this comment?")
    showDelete? axios.delete(`https://ecoclicko.onrender.com/api/Blog/deleteBlog${blogId}`)
    .then(()=>setReload(!relode))
    .catch((err)=>{console.log(err)}):alert('There seems to be a problem, try again please!')
  }

  const truncateStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2, // Limit to 3 lines
    maxHeight: '60px', // Adjust based on your design
  };

  return (
    <>
    <div className="oneBlog">
        {urlContainsAdmin&&(
          <Dropdown >
          <Dropdown.Toggle
            
            data-toggle="dropdown"
            id="dropdown-67443507"
            variant="default"
            className="m-0"
          >
            <i className="nc-icon nc-planet"></i>
            <span className="notification"><i className="fa fa-bars fa-large"></i></span>
            <span className="d-lg-none ml-1">Notification</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#pablo"
              onClick={(e) => deleteBlog(data.id)}
            >
              Delete
            </Dropdown.Item>
            <Dropdown.Item
              href="#pablo"
              onClick={handleShow}
            >
               Update 
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        )}
      <Link to={`/OneBlog/${data.id}`}>
      <div className="col card-container">
        <div className="card shadow-sm">
          <img src={data.blogImage} alt="" />
          <div className="card-body">
            <h3>{data.blogTitle}</h3>
            <p className="card-text" style={truncateStyle}>
              {parse(data.blogContent)}
            </p>
          </div>
        </div>
      </div>
      </Link>
      <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update yor Blog</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <UpdateBlog blogId={data.id}/>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
        
              </Modal.Footer>
            </Modal>
    </div>
    </>
  );
}

export default BlogDetails;
