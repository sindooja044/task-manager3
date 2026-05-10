const Task=require('../models/Task')
const User=require('../models/User');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');

const add=async (req,res)=>{
    try{
    const {title}=req.body;
    if(!title){
        return res.status(404).json({message:"not found"})
    }
    const task=await Task.create({title})
    return res.status(201).json(task);
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}

const getTask=async (req,res)=>{
    try{
    const tasks=await Task.find().sort({createdAT:-1})
    return res.status(200).json(tasks);
    }catch(err){
        return res.status(404).json({message:err.message})
    }
    
}
const toggleTask=async (req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json({message:"not found"})
        }
        task.completed=!task.completed;
    await task.save();
     res.json(task);
    } catch(err){
          return res.status(500).json({message:err.message})

    }
    
}
const deleteTask=async (req,res)=>{
    try{
        const task=await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).json({message:"not found"})
        }
       
        res.json({message:"successfuly deleted"}); 
    }catch(err){
          return res.status(500).json({message:err.message})

    }
}
const updateTask=async (req,res)=>{
    try{
        const {title}=req.body;
        const task=await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json({message:"not found"})
        }
        task.title=title;
        await task.save();
        res.json(task)
    }catch(err){
          return res.status(500).json({message:err.message})

    }
}


const userRegister=async (req, res) => {
    try{
        const {name, email, password}=req.body;
        const useExist=await User.findOne({email});
    
    if(useExist){
        return res.status(404).json({message:"email already exist"})
    }
  const hashedPassword= await bcrypt.hash('password',1234)

    const user=await User.create({name, email, password:hashedPassword});
   
    res.status(201).json(user);
}catch(err){
     return res.status(500).json({message:err.message})
}

}
module.exports={add,getTask, toggleTask,deleteTask,updateTask,userRegister};