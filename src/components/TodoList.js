import Home from "../view/Home"
import TodoItem from "./TodoItem"
import React,{useState} from "react"
function TodoList({todos1}){
    const [todos,setTodo] = useState([{
        "id" : 1,
        "title" :"learn react",
        "description" : "Introduction to react",
        "status" : false
    },
    {    "id" : 2,
        "title" :"Go to the market",
        "description" : "Buy some fruits and groceries for my granny",
        "status" : false
    }])
    return (
        <section className="todosection">
        {/*loop over the todos list abd get an individual todo*/}
        {todos.map((item,index)=>(
                <TodoItem key={index} item={item}/>
            ))
        }
        </section>
    )
}
export default TodoList