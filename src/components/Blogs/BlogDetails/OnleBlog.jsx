import React, { useEffect, useState } from "react";
import AddComments from "../Commnets/AddComments";
import ReadingComments from "../Commnets/ReadingComments";
import axios from "axios";
import { useParams } from "react-router-dom";
import Like from "../Likes/Like";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'
import moment from "moment";


function OneBlog() {
  const [commntes, setComments] = useState([]);
  const [OneBlog, setOneBlog] = useState([]);
  const [user_id,setUser_id]=useState('')
  const [reload, setReload] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetchComments();
  }, [reload]);
  useEffect(() => {
    fetchOneBlog();
    getUserId();
  }, []);
  const fetchComments = () => {
    axios
      .get(`https://ecoclicko.onrender.com/api/Comments/getComments/${id}`)
      .then((result) => {
        setComments(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchOneBlog = () => {
    axios
      .get(`https://ecoclicko.onrender.com/api/Blog/getone/${id}`)
      .then((result) => {
        setOneBlog(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const getUserId = () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decodedToken = jwt_decode(token); 
        if (decodedToken) {
          setUser_id(decodedToken.userId)
          console.log('User ID:', decodedToken.userId);
        } else {
          console.log('Invalid token.');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('No token found.');
    }
  };
 
  return (
    <>
    <div class="container mt-5">
            <div class="row">
                <div class="col-lg-8">
              
                    <article>

                        <header class="mb-4">
                           
                            <h1 class="fw-bolder mb-1">{OneBlog[0]?.blogTitle}</h1>
                           
                            <div class="text-muted fst-italic mb-2"> {moment(OneBlog[0]?.created_at).fromNow()}</div>
                          
{/*                             <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                            <a class="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a> */}
                        </header>
                     
                        <figure class="mb-4"><img class="img-fluid rounded" src={OneBlog[0]?.blogImage} alt="..." />
                        <div class="like-button">
                <Like idBlog={id} user_id={user_id} />
              </div>
              </figure>
                     
                        <section class="mb-5 pt-5">
                            <p class="fs-5 mb-4">{OneBlog[0]?.blogContent}</p>
                           </section>
                           

                    </article>


                    <AddComments
        blogId={id}
        user_id={user_id}
        setReload={setReload}
        reload={reload}
      />
                  
                    <ReadingComments
        commntes={commntes}
        user_id={user_id}
        setReload={setReload}
        reload={reload}
      />


                </div>
             
            </div>
        </div>

    </>
  );
}

export default OneBlog;
