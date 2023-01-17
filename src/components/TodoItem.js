import React,{useState} from "react"
function TodoItem({item}){
// const [todo,setTodo] = useState({
//     "title" :"learn react",
//     "description" : "Introduction to react"
// })
// console.log(todo)
    return(
        <div className="todoItem">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <select>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
        </select>
        </div>
    )
}
export default TodoItem