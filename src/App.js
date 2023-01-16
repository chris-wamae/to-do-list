import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './view/Home';
import TodoList from './components/TodoList';
import TodoAnalytics from './view/TodoAnalytics';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App(){
  const [currentPage,newPage] = useState(<Home changePage={changePage}/>)
  function changePage(pageName){
  return pageName === 1 ? newPage(<Home changePage={changePage}/>) : newPage(<TodoAnalytics changePage={changePage}/>)
  }
  

  return (
    <div className="App">
    {currentPage}
    </div>
  );
}

export default App;
 