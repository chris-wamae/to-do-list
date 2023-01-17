import TodoItem from "../components/TodoItem"
import TodoList from "../components/TodoList"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import React,{useState} from "react"

function Home({changePage}){
    const [todos,setTodos] = useState([])
    // This function adds new Todo's to the page
    function addNewTodo(){
        return(
            <form>
                <input type="text" placeholder="Todo title"></input>
                <textarea type="text" placeholder="Description"></textarea>
                <button type="submit">Add</button>
            </form>
        )
    }
     // This function adds new Todo's to the page (lecture varation)

// new todo state
const [newTodo,setNewTodo] = useState("")
// handle input change
const handleChange = (e) => {
setNewTodo(e.target.value)
}
console.log(newTodo)
const handleSubmit = (e) =>{
    e.preventDefault()
    const newTask = {
        id:Math.floor(Math.random()*10),
        title:newTodo,
        description:"Introduction to react",
        status:false
    }
    setTodos([...todos,newTask])
    }
    console.log(todos)
    function addNewTodo2(){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Enter new todo" value={newTodo}></input>
                <button  type="submit">Add</button>
                <TodoList todos1={todos} />
            </form>
        </div>
    )
}

    return (
    <div className="homepage">
    <NavBar changePage={changePage}/>
    <h1>Welcome to the Todo's App!</h1>
     <div className="addTodoForm">
        <h2>Add new todo</h2>
        {addNewTodo()}
        {addNewTodo2()}
     </div>
    <h2>My todo's</h2>
    <TodoList />
    <Footer />
    </div>
    )
}
export default Home