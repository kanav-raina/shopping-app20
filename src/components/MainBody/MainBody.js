import React from 'react'
import MainBodyComponent from './MainBodyComponent'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      margin:'2rem 4rem 2rem 4rem',
      display:'flex',
      flexDirection:"row",
      flexWrap:'wrap',
      justifyContent:"centre"
    }
}))

const MainBody = () => {
    const classes = useStyles();
    const products=useSelector(state=>state.products.products)
    return (
        <div className={classes.root}>
            {products.map((product)=>{
                return(<div >
                        <MainBodyComponent product={product} />
                       </div> 
                        )
            })}
        </div>
    )
}

export default MainBody
