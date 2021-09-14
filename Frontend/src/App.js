import './App.css';
import Header from './components/Header'
import data from './components/data/data.json'
import { useState, useEffect } from 'react'
import ToDoList from './components/ToDoList'
import Form from './components/Form'
import FetchTasks from './components/data/FetchTasks';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Players from './components/Players';
import axios from 'axios';

function App() {

const [toDoList, setToDoList] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/tasks")
      .then(res => res.json())
      .then(result => setToDoList(result))
      .then(console.log(toDoList))
},[])



const addTask = (input) => {
  let updatedList = [...toDoList]
  updatedList = [...updatedList, { id: toDoList.length + 1, task: input.task, complete: false}]
  setToDoList(updatedList)
}

const handleToggle = (id) => {
 
  axios.put(`http://localhost:3001/tasks/${id}`, { _id: id })
  let mapped = toDoList.map(task => {
    return task._id == id ? { ...task, complete: !task.complete } : { ...task};
    });
  setToDoList(mapped);
  console.log(toDoList.find(task => task._id == id))
  // Using Class Components: this.setState({toDoList: mapped})
}

const handleFilter = () => {
  let filtered = toDoList.filter(task => {
    return !task.complete})
  setToDoList(filtered)
}

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Header />
      <Route path="/home">
        <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
      </Route>

      <Route path="/todo">
        <Form addTask={addTask}/>
      </Route>
      
      <Route path="/players">
        <Players/>
      </Route>
      
      
      
      
    </div>
    </Router>
  );
}

export default App;
