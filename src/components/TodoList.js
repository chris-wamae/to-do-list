import Home from "../view/Home"
import TodoItem from "./TodoItem"
function TodoList(){
    return (
        <section className="todosection">
        <TodoItem />
        <TodoItem />
        </section>
    )
}
export default TodoList