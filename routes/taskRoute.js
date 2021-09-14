const express = require("express")
const { update } = require("../models/taskModel")
const router = express.Router()
const Task = require("../models/taskModel")

router.route("/tasks").post((req, res) => {
    const category = req.body.category
    const task = req.body.task 
    const newTask = new Task({
        category,
        task,
        complete: false
    })

    newTask.save()
})

router.route("/tasks").get((req, res) => {
    Task.find()
        .then(foundTasks => res.json(foundTasks))
})

router.route("/tasks/61411faa6b3e7af94f99359c").put((req, res) => {
    debugger
    let updateTask = Task.findOne({_id: "61411faa6b3e7af94f99359c"})
    // Task.updateOne({_id: "6140c78564824f4239f12d8d"}, {task: 'Back to Original'}, {new: true})
    updateTask.updateOne({task: `${Object.keys(updateTask)[0]}` })
    // res.send('string')
    // Object.keys(res)[1]

    // if(updateTask.complete === true){
    //     updateTask.updateOne({$set: {complete: false}})
    //     .then(updateTask => res.json(updateTask))
    //     .then(console.log(res))
    // }else if(updateTask.complete === false){
    //     updateTask.updateOne({$set: {complete: true}})
    //     .then(updateTask => res.json(updateTask))
    //     .then(console.log(res))
    // }

    .then(updateTask => res.json(updateTask))
    .then(console.log(res))
      
        
})

module.exports = router