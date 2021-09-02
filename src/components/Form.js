import { useState } from 'react'

const Form = ({addTask}) => {

    const [input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(input)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={handleChange} placeholder={"New Task"} ></input>
        </form>
        </div>
    );
}

export default Form;
