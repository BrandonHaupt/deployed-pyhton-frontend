import { Link, useLoaderData, Form } from "react-router-dom";

export default function Show(props){
  const post = useLoaderData()

  const div = {
    border:"3px solid green",
    borderRadius: "10px",
    width: "80%",
    margin: "30px auto"
  }

  const updateFormDiv = {
    textAlign: "center", 
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItem: "center",
    margin: "0 auto"
  }

  return(
      <div style={div}>
          <h1>{post.subject}</h1>
          <h2>{post.details}</h2>
          <div style={updateFormDiv}>
            <h2>Update Todo</h2>
            <Form action={`/update/${post.id}`} method="post">
              <input type="text" name="subject" placeholder="Subject" defaultValue={post.subject}/>
              <input type="text" name="details" placeholder="Details" defaultValue={post.details}/>
              <button>Update Todo</button>
            </Form>
            <Form action={`/delete/${post.id}`} method="post">
              <button>Delete Todo</button>
            </Form>
          </div>
          <Link to="/">
            <button>Go Back</button>
          </Link>
      </div>
  )
};