import logo from './logo.svg';
import './App.css';
import Home from './view/Home';
import TodoList from './components/TodoList';
import TodoAnalytics from './view/TodoAnalytics';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <NavBar/>
   <Home />
   <Footer/>
    </div>
  );
}

export default App;
