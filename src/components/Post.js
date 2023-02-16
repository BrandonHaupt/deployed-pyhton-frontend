import { Link } from "react-router-dom";

export default function Post(props) {

  const post = props.post
  
  const div = {
    border: "3px solid",
    borderRadius: "10px",
    margin: "10px auto",
    width: "80%"
  }

  return <div style={div}>
    <Link to={`/post/${post.id}`}>
      <h1>{post.subject}</h1>
    </Link>
    <h2>{post.details}</h2>
  </div>;
};
