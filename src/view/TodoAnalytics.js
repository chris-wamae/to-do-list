import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import TodoList from "../components/TodoList"
function TodoAnalytics({changePage}){
    return(<div className="todoAnalytics">
        <NavBar changePage={changePage}/>
        <h2>Newly added todo's</h2>
        <TodoList />
        <h2>Pending todo's</h2>
        <TodoList />
        <Footer />
        </div>)
}
export default TodoAnalytics