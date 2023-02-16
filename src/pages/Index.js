import { Form, useLoaderData } from "react-router-dom";
import Post from "../components/Post"


export default function Index(props){
  const todos = useLoaderData()

  const div = {
    textAlign: "center", 
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItem: "center",
    margin: "0 auto"
  }
  
  return(
    <>
      <div style={div}>
        <h2>Create a Todo</h2>
        <Form action="/create" method="post">
          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="details" placeholder="Details" />
          <button>Create New Todo</button>
        </Form>
      </div>
      {todos.map((post) => <Post key={post.id} post={post} />)}
    </>
  )
};
  

