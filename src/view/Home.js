import TodoItem from "../components/TodoItem"
import TodoList from "../components/TodoList"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Home({changePage}){
    return (
    <div className="homepage">
    <NavBar changePage={changePage}/>
    <h1>Welcome to the Todo's App!</h1>
    <h2>My todo's</h2>
    <TodoList />
    <Footer />
    </div>
    )
}
export default Home