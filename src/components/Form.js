import { useState } from 'react'

const Form = () => {

    const [input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.currentTarget.value)
    }

    return (
        <div>
            <input type='text' value={input} onChange={handleChange} placeholder={"New Task"}></input>
        </div>
    );
}

export default Form;
