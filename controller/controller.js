const { findOneAndDelete } = require('../models/Task.js')
const Task = require('../models/Task.js')

const showAllTasks = async (req, res)=>{
    try {
        const allTasks = await Task.find({})
        res.status(200).json({allTasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createNewTasks = async(req, res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const showSingleTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task){
            return res.status(404).json({msg: `No task with it: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

const editTask = async (req, res)=>{

    try {
    const {id:taskID} = req.params
    const editTask = await Task.findOneAndUpdate({_id:taskID}, req.body, {
        new: true,
        runValidators: true
    })
    if (!editTask){
        return res.status(404).json({msg: `No task with it: ${taskID}`})
    }
    res.status(200).json({editTask})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    

}

const deleteTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        const deleteTask = await Task.findOneAndDelete({_id:taskID});
        if (!deleteTask){
            return res.status(404).json({msg: "no such task"})
        }
        res.status(200).json({deleteTask})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

module.exports = {
    showAllTasks,
    createNewTasks, 
    showSingleTask,
    editTask, 
    deleteTask
}