const {add,getTask, toggleTask,deleteTask}=require("../controllers/taskController")
const express=require('express')
const router=express.Router();



router.post("/", add)

router.get("/", getTask)
router.patch("/:id", toggleTask)
router.delete("/:id", deleteTask)
module.exports=router