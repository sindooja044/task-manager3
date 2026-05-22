const {add,getTask, toggleTask,deleteTask,updateTask}=require("../controllers/taskController");

const protect = require('../middleware/authMiddleware');

const express=require('express')
const router=express.Router();



router.post("/",protect,add)

router.get("/", protect, getTask)
router.patch("/:id",protect,toggleTask)
router.delete("/:id",protect, deleteTask)
router.put("/:id",protect, updateTask)

module.exports=router