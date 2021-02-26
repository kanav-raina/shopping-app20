import { useDispatch } from "react-redux"
import axios from 'axios'
import React from 'react'
export const GetProducts=async()=>{
    const dispatch=useDispatch()
    const [products,setProducts]=React.useState(null)
    await axios.get('http://localhost:5000/addData').then((response)=>{
        setProducts(response.data)
    })
    return({type:'PRODUCT_LIST',payload:products})
}

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case 'PRODUCT_LIST':  
        return { products: action.payload }

      default:
        return state
    }
  }
  
