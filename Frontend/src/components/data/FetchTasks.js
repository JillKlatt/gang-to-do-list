import React, {useEffect, useState} from 'react';

const FetchTasks = () => {
    const [tasks, setTasks] = useState([{
        category: '',
        task: ''
    }])

    useEffect(() => {
        fetch("http://localhost:3001/tasks")
            .then(res => res.json())
            .then(data => setTasks(data))
    },[tasks.task])

    // useEffect(() => {
    //     fetch("http://localhost:3001/tasks").then(res => {
    //         if(res.ok) {
    //             return res.json
    //         }
    //     }).then(jsonRes => setTasks(jsonRes))
    // })
    return (
        <div>
        {tasks.map(task => <div>{task.task}</div>)}
        </div>
    );
}

export default FetchTasks;