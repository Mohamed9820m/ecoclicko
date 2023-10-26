import React, { useState } from 'react';
import './AddComments.css';

import axios from 'axios';
;

function AddComments({blogId,user_id, setReload, reload}) {
  const [comment, setComment] = useState(''); // Fixed the typo in the state variable name
 
  function addComment() {
    if (!comment) {
      alert("create a comment");
    } else {
      axios
        .post(
          `https://ecoclicko.onrender.com/api/Comments/addComment/${blogId}/${user_id}`,
          { comment: comment }
        )
        .then(() => setReload(!reload))
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
  


      <section className="mb-5">
                        <div className="card bg-white">
                            <div className="card-body">
                                <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"
                                onChange={e => setComment(e.target.value)} // Fixed the typo in the function argument
                                value={comment}>

                                </textarea>
                                <div className='py-3'>
                                <button type="button" className="btn btn-success" onClick={addComment}>Post</button>
                                </div>
                                
                                </form>

        
                            </div>
                            
                        </div>
                    </section>
    </>
  );
}

export default AddComments;