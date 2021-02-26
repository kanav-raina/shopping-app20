const express = require('express');
const app = express()
const PORT=process.env.PORT || 5000
const router = require('./route/router')
const bodyParser=require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('./config/conn')

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cookieParser())  
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false})) 
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})


