import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import TodoList from "../components/TodoList"
function TodoAnalytics({changePage}){
    return(    <>
        <NavBar changePage={changePage}/>
        <h1>NEWLY ADDED TODO's</h1>
        <TodoList />
        <h1>PENDING TODO'S</h1>
        <TodoList />
        <Footer />
        </>)
}
export default TodoAnalytics