import url from "./urls";
import { redirect } from "react-router-dom";


export async function CreateAction({request}){
    //Grab the form data
    const formData = await request.formData()

    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    await fetch(url, {
        //What type of request is it
        method: "post",
        //What kind of data are we sending
        headers: {
            "Content-Type": "application/json"
        },
        // sends our data along with the request
        body: JSON.stringify(newTodo)
    })

    return redirect('/')
}

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new todo
    const updateTodo = {
      subject: formData.get("subject"),
      details: formData.get("details"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTodo),
    });
  
    // redirect back to the index page
    return redirect("/");
}


// Deletes stuff
export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}