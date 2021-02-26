const express= require('express');
const auth =require('../middleware/auth')
const router=express.Router()
const { check, validationResult } 
    = require('express-validator');

const {
    signup,
    signin,
    signout,
} = require('../controller/controllerAuth')

const {
    addData,
    getData,
    deleteData,
    updateData,
    addProductData,
    getProductData
} = require('../controller/controllerData')



router
    .route('/signup')
    .post(signup)

router
    .route('/signin')
    .post(signin)

router
    .route('/signout')
    .get(auth,signout)

router
    .route('/data')
    .post([
        check('site', 'site length should be 10 to 30 characters').isLength({ min: 5, max: 30 }),
        check('uname', 'site length should be 10 to 30 characters').isLength({ min: 1, max: 30 }) ,
        check('password', 'site length should be 10 to 30 characters').isLength({ min: 5, max: 30 })  
    ],(req, res, next) => {
        const error = validationResult(req).formatWith(({ msg }) => msg);
    
        const hasError = !error.isEmpty();
    
        if (hasError) {
          res.status(422).json({ error: error.array() });
        } else {
          next();
        }
      },
    addData) //add auth later
    .get(auth,getData)
    .put(auth,deleteData)

router.
    route('/update')
    .put(auth,updateData)
    
router.
    route('/')
    .get((req,res)=>{
        res.cookie("kanav","raina")
        res.send("success")
    })


router
    .route('/addData')
    .post([
        check('name', 'site length should be 10 to 30 characters').isLength({ min: 5, max: 100 }),
        check('image', 'site length should be 10 to 30 characters').isLength({ min: 1, max: 100 }) ,
        check('description', 'site length should be 10 to 30 characters').isLength({ min: 5, max: 600 })  
    ],(req, res, next) => {
        const error = validationResult(req).formatWith(({ msg }) => msg);
    
        const hasError = !error.isEmpty();
    
        if (hasError) {
          res.status(422).json({ error: error.array() });
        } else {
          next();
        }
      },
    addProductData)
    .get(getProductData)
    
module.exports = router