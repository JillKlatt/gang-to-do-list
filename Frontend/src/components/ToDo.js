

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
     
        handleToggle(e.currentTarget.id)
    }

    return (
        <li id={todo._id} key={todo._id + todo.task} name="todo" value={todo._id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </li>
    );
};


export default ToDo;
