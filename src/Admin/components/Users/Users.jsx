import React, { useEffect, useState } from 'react'
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import './Users.css'

  import axios from'axios'
import Sidebar from '../Sidebar';
function Users() {
    const [users,setUsers]=useState()
    useEffect(()=>{
        fetchUsers()
    },[])
    const fetchUsers=()=>{
        axios.get('http://127.0.0.1:5000/api/Users/getAllUsers')
        .then(result=>{
            setUsers(result.data)
        })
        .catch((err)=>{console.log(err)})
    }
    const deleteUser=(id)=>{
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (shouldDelete) {
        axios.delete(`http://127.0.0.1:5000/api/Users/deleteUser${id}`)
        .then(()=>{window.location.reload();})
      }
    }
  return (
    <div className="dashboard-wrapper">
    <Sidebar/>
    <div className="main-panel">
    <div className="content">
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Users</Card.Title>
                <p className="card-category">
                  Here is all users 
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Image</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map(e=>(
                         <tr>
                         <td>{e.id}</td>
                         <td>
                         
                            <img src={e.image} alt="" style={{width:'40px',height:'30px' }}/>
                        
                            </td>
                         <td>{e.userName}</td>
                         <td>{e.userEmail}</td>
                         <td>
                          <button onClick={()=>{deleteUser(e.id)}}>delete </button>
                          </td>
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

export default Users
