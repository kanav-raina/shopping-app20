const RegisterUser = require("../models/registerSchema");
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const auth = require('../middleware/auth')

exports.signup=async (req,res,next) => {
    try {
        const newUser= new RegisterUser({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password
        })
        await newUser.save()
    } catch (error) {
        console.log(error.message)
    }
    res.redirect('http://localhost:3000/signin');
}


    
exports.signin= async(req,res,next)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user_info = await RegisterUser.findOne({email:email})                 //find query jo hai RegisterUser par karni hai jise  const RegisterUser=require('./models/Schema')
        const isMatch = await bcrypt.compare(password,user_info.password)
        
        const token= await user_info.generateAuthToken();

        res.cookie('jwt', token, {
            expires:new Date(Date.now() + 50000),               //this will store cookie in you browser
            httpOnly:true,
            //secure:true
        })
        //console.log("res.cookie")
        //console.log(`the cookie is ${req.cookies.jwt}`)         //use this only in authenticated pages at this time it is showing undefined in console because we are generating cookie and asking it at the same time
        //console.log(token)
        if(isMatch){
            console.log('you are login')
            res.send(user_info)
            //res.render('homepage')
        }else{
            res.send('password is incorrect')
        }
        
        //console.log(user)
    }catch(error){
        console.log(error)
    }finally{
        //res.send('success')
    }
}

exports.signout=async(req,res)=>{
    //console.log(`the cookie is ${req.cookies.jwt}`) 
    try{
        req.user.tokens = req.user.tokens.filter((currentElement)=>{   
            return currentElement.token !== req.token
        })
        res.clearCookie('jwt')          
        await req.user.save();
        console.log("signout success")
        res.send('Logout successfully') 
    }catch(error){
        console.log(error)
    }
}



