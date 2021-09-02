import './App.css';
import Header from './components/Header'
import data from './components/data/data.json'
import { useState } from 'react'
import ToDoList from './components/ToDoList'
import Form from './components/Form'

function App() {

const [toDoList, setToDoList] = useState(data)

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
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
      <Form />
    </div>
  );
}

export default App;
