import TodoItem from "../components/TodoItem"
import TodoList from "../components/TodoList"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Home({changePage}){
    return (
    <>
    <NavBar changePage={changePage}/>
    <h1>Welcome to the Todo's App!</h1>
    <TodoList />
    <Footer />
    </>
    )
}
export default Home