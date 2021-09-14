import { useState } from 'react'
import axios from 'axios'

const Form = ({addTask}) => {

    const [input, setInput] = useState({
        category: '', 
        task: ''
    })

    function handleChange(e) {
        const {name, value} = e.target

        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        debugger
        const newTask = {
            category: input.category,
            task: input.task
        }
        axios.post("http://localhost:3001/tasks", newTask)
        addTask(input)
    }
    return (        
        <div>
            
        <form onSubmit={handleSubmit}>
            <input type='text' name='category' autoComplete="off" value={input.category} onChange={handleChange} placeholder={"Category"} ></input><br></br><br></br>
            <input type='text' name='task' value={input.task} onChange={handleChange} placeholder={"New Task"} ></input><br></br><br></br>
            <button className='btn btn-outline-success'>Add Task</button>
        </form>
        </div>
    );
}

export default Form;
