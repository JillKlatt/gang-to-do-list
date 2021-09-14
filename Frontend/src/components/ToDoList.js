import ToDo from './ToDo'

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {


    return (
        <ul>
            {toDoList.map(todo => {
                return <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} />
            })}
            <button style={{margin: `20px`}} onClick={handleFilter}>Clear Completed</button>
        </ul>
    );
}

export default ToDoList;
