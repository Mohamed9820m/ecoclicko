import React, { useState } from "react";
import "../Commnets/ReadingComments.css";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ReadingComments({ commntes, user_id, setReload, reload  }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [newComment, setNewComment] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadMoreComments = () => {
    setDisplayCount(displayCount + 3);
  };

  const deleteComment = (commentId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (shouldDelete) {
      axios
        .delete(`https://ecoclicko.onrender.com/api/Comments/deleteComment/${commentId}`)
        .then(() => setReload(!reload));
    }
  };
  const updateComment = (commentId) => {
    axios
      .put(`https://ecoclicko.onrender.com/api/Comments/update/${commentId}`, {
        comment: newComment,
      })
      .then(() => {
        handleClose();
        setReload(!reload);
      });
  };

  return (
    <>
      <div className="container">
        {commntes.slice(0, displayCount).map((element) => (
          <div class="d-flex mb-4" key={element.id}>
            <div class="flex-shrink-0">
              <img
                class="rounded-circle object-fit-cover"
                src={element?.User.image}
                alt={element?.User.userName}
                style={{ width: "50px", height: "50px" }} // Set width and height here
              />
            </div>
            <div class="ms-3">
              <div class="fw-bold">{element?.User.userName}</div>
              {element?.comment}
            </div>
            <div className="card-footer text-muted">
              {moment(element.created_at).fromNow()}
            </div>
            {element.User.id === user_id && (
              <div>
                <Button variant="primary" onClick={handleShow}>
                  update
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => {
                    deleteComment(element.id);
                  }}
                >
                  Delete{" "}
                </Button>
              </div>
            )}
             <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update yor comment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Create a new comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={(e) => setNewComment(e.target.value)} 
                      value={newComment} 
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    updateComment(element.id);
                  }}
                >
                  Save Change
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
      

      {displayCount < commntes.length && (
        <button className="load-more" onClick={loadMoreComments}>
          Load More
        </button>
      )}
    </>
  );
}

export default ReadingComments;
