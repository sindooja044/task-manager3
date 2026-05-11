const {add,getTask, toggleTask,deleteTask,updateTask}=require("../controllers/taskController");
const {userRegister,userLogin}=require("../controllers/userController");

const express=require('express')
const router=express.Router();



router.post("/", add)

router.get("/", getTask)
router.patch("/:id", toggleTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)
router.post('/register', userRegister)
router.post('/login', userLogin)
module.exports=router