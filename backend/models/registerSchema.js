const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const registerSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,                
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

registerSchema.methods.generateAuthToken = async function(){               
        try{
            const token = jwt.sign({_id:this._id.toString()},'akashisecretkey')//store this in .env file
            this.tokens = this.tokens.concat({token:token})
            await this.save()
            return token
        }catch(error){
            console.log(error)
        }
    } 
registerSchema.pre('save', async function(next){                        
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10)
        this.cpassword = undefined;
    }
    next()
})

const RegisterUser = new mongoose.model('user',registerSchema);          

module.exports = RegisterUser