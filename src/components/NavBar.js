import TodoAnalytics from "../view/TodoAnalytics"
import Home from "../view/Home"
function NavBar({changePage}){
    function changePageHome(){
    return changePage(1)
    }
    function changePageTodoAnalytics(){
    return changePage(2)
        }
    return(
    <div className="navbar">
        <h1 onClick={changePageHome}>Home</h1>
        <h1 onClick={changePageTodoAnalytics}>TodoAnalytics</h1>
    </div>)
}
export default NavBar