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
  const hashedPassword= await bcrypt.hash(password,10)

    const user=await User.create({name, email, password:hashedPassword});
   
    res.status(201).json(user);
}catch(err){
     return res.status(500).json({message:err.message})
}

}
const userLogin=async (req,res)=>{
    try{
        const {email,password}=req.body;
         const userExist=await User.findOne({email});
        if(!userExist){
        return res.status(404).json({message:"Invalid Credentials"})
    }
        const user = await bcrypt.compare(password,userExist.password)
        if(!user){
        return res.status(404).json({message:"Invalid Credentials"})
    }
    const token=await jwt.sign({id:user._id}, process.env.JWT_SECRET)
     res.json({token,user});

    }catch(err){
        return res.status(500).json({message:err.message})

    }  
}
module.exports ={userRegister,userLogin}