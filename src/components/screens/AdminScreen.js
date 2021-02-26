import React, { useEffect } from 'react'
import axios from 'axios'

const AdminScreen = () => {
    const product={
        name:'',
        image:'',
        description:'',
        brand:'',
        category:'',
        price:'',
        discount_price:'',
        countInStock:'',
        rating:'',
        numReviews:''

    }
    const [productDetail,setProductDetail]=React.useState(product)
    const handleChange=(e)=>{
        setProductDetail({...productDetail, [e.target.name]:e.target.value})
    }

    const addData=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/addData',productDetail)
        setProductDetail(product)
    }
    useEffect(()=>{

    },[productDetail])
    return (
        <div>
            <form method="POST" onSubmit={addData}>
                <div className='textField'>Name:<input type='text' name='name' value={productDetail.name} onChange={handleChange}  /></div>
                <div className='textField'>ImageUrl:<input type='text' name='image' value={productDetail.image} onChange={handleChange} /></div>
                <div className='textField'>Description<input type='text' name='description' value={productDetail.description} onChange={handleChange} /></div>
                <div className='textField'>Brand:<input type='text' name='brand' value={productDetail.brand} onChange={handleChange} /></div>
                <div className='textField'>Category:<input type='text' name='category' value={productDetail.category} onChange={handleChange} /></div>
                <div className='textField'>Price<input type='text' name='price' value={productDetail.price} onChange={handleChange} /></div>
                <div className='textField'>DiscountPrice<input type='text' name='discount_price' value={productDetail.discount_price} onChange={handleChange} /></div>
                <div className='textField'>CountInStock<input type='text' name='countInStock' value={productDetail.countInStock} onChange={handleChange} /></div>
                <div className='textField'>Rating<input type='text' name='rating' value={productDetail.rating} onChange={handleChange} /></div>
                <div className='textField'>NumReviews<input type='text' name='numReviews' value={productDetail.numReviews} onChange={handleChange} /></div>
                <input type="submit" value="Submit" />
            </form>


        </div>
    )
}

export default AdminScreen



     
      