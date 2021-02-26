import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin:'1rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MainBodyComponent({product}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history=useHistory()
  const productDetail=()=>{
    history.push(`/products/${product._id}`)
  }
  return (
    <Card className={classes.root} onClick={productDetail}>
      
      <CardMedia
        className={classes.media}
        image={product.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.name}
        </Typography>
        <Typography  color="textSecondary" component="p">
          $ {product.price}
        </Typography>
        <Typography  color="textSecondary" component="p">
          <Rating value={product.rating} disabled /><span style={{jmarginBottom:'1rem'}}>{product.numReviews}</span>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
