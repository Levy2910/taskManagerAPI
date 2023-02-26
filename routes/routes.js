const express = require("express");
const router = express.Router();
const {showAllTasks,  createNewTasks, 
    showSingleTask,
    editTask, 
    deleteTask} = require("../controller/controller");

router.get("/", showAllTasks);
router.get("/:id", showSingleTask);
router.post("/", createNewTasks);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;

