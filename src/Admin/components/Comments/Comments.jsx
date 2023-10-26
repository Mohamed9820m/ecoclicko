import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col} from "react-bootstrap";
import Sidebar from '../Sidebar';
import '../../Dashbord.css'
function Comments() {
    const [allCommetns,setAllComments]=useState([])
    const [reload, setReload] = useState(false);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/api/Comments/getCommentsToAdmin')
        .then(result=>{
            setAllComments(result.data)
        })
        .catch(err=>{
            console.log('this error of axios',err)
        })
    },[reload])
    const deleteComment = (commentId) => {
        const shouldDelete = window.confirm(
          "Are you sure you want to delete this comment?"
        );
        if (shouldDelete) {
          axios
            .delete(`http://localhost:5000/api/Comments/deleteComment/${commentId}`)
            .then(() => setReload(!reload));
        }
      }
      const approveComment=(commentId)=>{
        axios.put(`http://localhost:5000/api/Comments/approveComment/${commentId}`)
        .then(() => setReload(!reload));
    }
  return (
    <div className="dashboard-wrapper">
      <Sidebar allCommetns={allCommetns}/>
      <div className="main-panel">

        <div className="content">
       <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All comments</Card.Title>
                <p className="card-category">
                  Here is you can finde all the comments of this application
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Comment</th>
                      <th className="border-0">User</th>
                      <th className="border-0">Blog</th>
                      <th className="border-0">Approved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCommetns?.map(e=>(
                         <tr>
                         <td>{e.id}</td>
                         <td>{e.comment}</td>
                         <td>{e.User.userName}</td>
                         <td>{e.Blog.blogTitle}</td>
                         <td>  <Button variant="success" onClick={()=>{approveComment(e.id)}}>Approve</Button>{' '}
                         <Button variant="danger" onClick={()=>{deleteComment(e.id)}}>Delete</Button></td>
                       </tr>
                    ))}
                   
                   
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
      
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    </div>
  )
}

export default Comments
