import url from "./urls";


//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(url)
    const todos = await response.json()
    return todos
}

//showLodaer - gets a single todo for our show route
export const showLoader = async({params}) => {
    const response = await fetch(url + `${params.id}/`)
    const todo = await response.json()
    console.log("SHOW LOADER:", todo)
    return todo
}