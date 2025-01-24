import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetailPage = () => {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = () => {

    axios.get(`http://localhost:3001/posts/${id}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.error('Errore durante il recupero del post:', err);
      });
  }

  useEffect(() => {
    fetchPost()
  }, [id])


  return (
    <div className="container">
      {post !== null ?
        <div>
          <h1>{post.title}</h1>
          <img src={`http://localhost:3001${post.image}`} alt="Immagine" />
          <p>{post.content}</p>
          <p>{post.id && `Post con ID: ${post.id}`}</p>
        </div> : 'Id non trovato'}

    </div>
  );
};

export default PostDetailPage;
