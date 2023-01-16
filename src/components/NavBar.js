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
        <p onClick={changePageHome}>Home</p>
        <p onClick={changePageTodoAnalytics}>TodoAnalytics</p>
    </div>)
}
export default NavBar