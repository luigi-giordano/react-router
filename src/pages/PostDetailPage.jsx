import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetailPage = () => {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>Post con ID: {post.id}</p>
    </div>
  );
};

export default PostDetailPage;
