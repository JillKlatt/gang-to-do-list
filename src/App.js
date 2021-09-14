import './App.css';
import Header from './components/Header'
import data from './components/data/data.json'
import { useState } from 'react'
import ToDoList from './components/ToDoList'
import Form from './components/Form'
import Player from './components/Player'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Players from './components/Players';

function App() {

const [toDoList, setToDoList] = useState(data)

const addTask = (input) => {
  let updatedList = [...toDoList]
  debugger
  updatedList = [...updatedList, { id: toDoList.length + 1, task: input.task, complete: false}]
  setToDoList(updatedList)
}

const handleToggle = (id) => {
  let mapped = toDoList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });

  setToDoList(mapped);
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
