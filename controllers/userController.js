const User=require('../models/User');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');

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
module.exports ={userRegister}