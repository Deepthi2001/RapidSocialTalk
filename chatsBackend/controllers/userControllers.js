// npm i express-async-handler - handles errors automatically

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const generateToken = require("../config/generateToken")

const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password,pic} = req.body;
    
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all fields")
    }
    const userExists = await User.findOne({email}); // search user in model
    if(userExists){
        res.status(400);
        throw new Error("User already Exists")
    } 
    const user = await User.create({name,email,password,pic});
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } 
    else{
        res.send(400);
        throw new Error("Failed to create user")
    }
})

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    const userExist = await User.findOne({email});
    if(userExist  && (await userExist.matchPassword(password))){
        res.json({
            _id: userExist._id,
            name: userExist.name,
            email: userExist.email,
            pic: userExist.pic,
            token: generateToken(userExist._id),
        })
    }
})

module.exports = {registerUser, authUser};