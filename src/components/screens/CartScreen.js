import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartProductItem from './CartProductItem';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
  }));

export default function CartScreen() {
  const classes = useStyles();
  const history=useHistory()
  const Checkout=()=>{
    history.push('/checkout')
  }
  const cartProducts = useSelector(state=>state.cart)
  return (
    <div className={classes.root}>
      <Grid container>     
            {cartProducts.cartItems.map((cartProduct)=>{
                return(
                    <Grid item xs={10}>
                        <CartProductItem product={cartProduct} />
                    </Grid>
                    )
            })}
            
      </Grid>
      <Button onClick={Checkout} variant='contained' color='primary' >Checkout</Button>
    </div>
  );
}
