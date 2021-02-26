import './App.css';
import AppleBar from './components/AppleBar';
import {cartProducts} from './data/cartProducts'
import MainBody from './components/MainBody/MainBody';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartScreen from './components/screens/CartScreen';
import ProductScreen from './components/screens/ProductScreen';
import AdminScreen from './components/screens/AdminScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios'
import Checkout from './components/Forms/Checkout';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';

function App() {
  const dispatch=useDispatch()
  const [products,setProducts]=React.useState([])

  useEffect(()=>{
    const getProducts=async()=>{
      const data=await axios.get('http://localhost:5000/addData').then((response)=>{
          dispatch({type:'PRODUCT_LIST',payload:response.data})
        })    
    }
    getProducts()
    
},[dispatch])
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <AppleBar />
        <Switch>
          <Route exact path='/' component={()=><MainBody products={products} />} />
          <Route exact path='/cart' component={()=><CartScreen cartProducts={cartProducts} />} />
          <Route exact path='/products/:id' component={()=><ProductScreen />} />
          <Route exact path='/admin' component={()=><AdminScreen />} />
          <Route exact path='/checkout' component={()=><Checkout />} />
          <Route exact path='/signin' component={()=><SignIn />} />
          <Route exact path='/signup' component={()=><SignUp />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
