import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import {addToCart} from '../../store/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    img:{
        marginTop:'3rem',
        height:"400px" 
    }
  }));

const ProductScreen = () => {
    const classes = useStyles();
    const params= useParams()
    console.log(params)
    const history=useHistory()
    const dispatch=useDispatch()
    const products=useSelector(state => state.products.products)
    var product=products.filter((p)=>{
        if(p._id === params.id){
            return(p)
        }
    })
    product=product[0]
    const addToCart=()=>{
        dispatch({type:'CART_ADD_ITEM',payload:product})
        history.push('/cart')   
    }
   
    useEffect(()=>{
        console.log('useEffect called',)
    },[product])
    
    return (
        <div className={classes.root}>
            <Grid container>
                
                <Grid item xs={7}>
                    <img className={classes.img} src={product?.image} alt="image" />
                </Grid>
                <Grid className={classes.img}  item xs={3}>
                    <h2>{product?.name } </h2>
                    <div>
                        {product?.description } 
                    </div>
                    <div>
                        Price:$ {product?.price}
                    </div>
                    <div><Rating value={product?.rating} /></div>
                <Button onClick={addToCart} variant='contained' color='primary'>add to cart</Button>
                </Grid>
            
            </Grid>
    </div>
    )
}

export default ProductScreen

