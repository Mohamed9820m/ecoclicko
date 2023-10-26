import { useEffect, useState } from "react";
import "./Like.css";
import axios from "axios";

function Like({ idBlog, user_id }) {
  const [liked, setLiked] = useState(false); 
  const [likeNumber, setLikeNumber] = useState();

  useEffect(() => {
    const fetchLikeStatus =() => {
    
        axios.get(`http://localhost:5000/api/Likes/getLike/${idBlog}/${user_id}`)
  .then((result) => {
    console.log(result.data);
    if (result.data.length === 0) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
         
    };

fetchLikeStatus()
   
  }, [idBlog, user_id]);
  function test (){
    if (liked===false){
        like()
        
    }else {
        dislike()
    }
  }

  const like = () => {
    axios
      .post(`http://localhost:5000/api/Likes/like/${idBlog}/${user_id}`)
      .then(() => setLiked(true))
      .catch(err => console.log(err));
  };

  const dislike = () => {
    axios
      .delete(`http://localhost:5000/api/Likes/dislike/${idBlog}/${user_id}`)
      .then(() => setLiked(false))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Likes/getOneLike/${idBlog}`)
      .then((result) => {
        setLikeNumber(result.data.length);
      })
      .catch((err) => {
        console.log("the error is ", err);
      });
  }, [liked]);

  return (
    <div onClick={()=>{test()}} >
      <div className="placement">
        <div className={`heart ${liked ? 'is-active' : ''}`}></div>
      </div>
      <div className="placement">
        <div className={`heart ${liked ? 'is-active' : ''}`}></div>
      </div>
      <div style={{marginLeft:'20px'}}>{likeNumber} like</div>
    </div>
  );
}

export default Like;
