const UserData =require('../models/dataSchema')
const Product = require('../models/ProductModel')

exports.getData=async(req,res)=>{
    try {
        const data=  await UserData.find()
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
}

exports.addData=(async(req,res)=>{
    try {
        
        const newUserData= new UserData({
                site:req.body.site,
                uname:req.body.uname,
                password:req.body.password
            })
        await newUserData.save()
        console.log('data saved successfully')
        }catch (error) {
            console.log(error.message)
    }
})
exports.addProductData=(async(req,res)=>{
    try {
        const newUserData= new Product({
            name:req.body.name,
            image:req.body.image,
            description:req.body.description,
            brand:req.body.brand,
            category:req.body.category,
            price:req.body.price,
            discount_price:req.body.discount_price,
            countInStock:req.body.countInStock,
            rating:req.body.rating,
            numReviews:req.body.numReviews
        })
        await newUserData.save()
        console.log('data saved successfully')
        }catch (error) {
            console.log(error.message)
    }
})

exports.getProductData=async(req,res)=>{
    try {
        const data=  await Product.find()
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
}
exports.deleteData=async(req,res)=>{
    try {
        //console.log(req)
        await UserData.findOne({_id: req.body.id}, function (error, data){
        console.log("This object will get deleted " + data);
        data.remove();
    });
    } catch (error) {
        console.log('something wrong')          
    }               
}

exports.updateData=async(req,res)=>{
    try {
        await UserData.findOneAndUpdate(
            {_id:req.body._id},
            req.body
        )
        console.log("updated successfully")
            
    } catch (error) {
        console.log(error.message)
    }
}
