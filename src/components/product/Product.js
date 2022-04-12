import React from 'react';
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, colors, Divider, Grid, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProductDialogue from '../Ui/ProductDialogue';
import {useState} from 'react';
import productDetails from '../../data/Details';
import { alpha } from '@mui/material/'
import { CartState } from '../../context/Context';


const useStyles = makeStyles((theme)=>({
    root:{
      "&:hover": {
        backgroundColor: ""
      }
    },
    cardC: {
        padding: "5px"
    },
    typo1: {
        padding: "0px"
    },
    box: {
        display: "flex",
        alignItems: "center",
        "& img": {
            marginLeft: "10px"
        }
    }
}))

function Product(props) {
  const {id, name, type, price, color,img} = props.d
    const classes = useStyles();
    const { state: {products} } = CartState();
    
  const [open, setOpen] = useState(false);
  const handleClickOpen=()=>{
      setOpen(true)
  }
  const { loading = false } = props;

  return (
    
      
      
    <Card className={classes.root} raised={true} sx={{ maxWidth: 200, overflow: 'hidden', borderRadius: "8px", }} elevation={1}>
    <CardActionArea LinkComponent={Link} to={`/products/${id}`}  >
    {/* onClick={() => props.Render({id, name, type, price, color,img ,units: 1})} */}
      <Box >
      
        {loading?(<Skeleton variant='rectangular' width="200" height="150px"><CardMedia /></Skeleton>):(<CardMedia
        component="img"
        height="150"
        width='200'
        image={props.d.img}
        alt="green iguana"
      />)}
      
      
      </Box>
      <CardContent className={classes.cardC} >
      {loading?(<Skeleton  width="200" ></Skeleton>):(<Typography className={classes.typo1} gutterBottom variant="h6" component="div">
          {props.d.name}
        </Typography>)}
        
        <Divider/>
        <Box className={classes.box}>
          <Typography  variant="body2" >
          Color:
          </Typography>
        <img src="img/cblack.jpg" height="20px" alt="cblack" />
        </Box>  
        <Typography variant="body2">Price: </Typography>     
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
      <Button size="small" color="secondary" variant='contained'>
        Book Now
      </Button>
    </CardActions> */}
    {/* <ProductDialogue  setOpen={setOpen} open={open} name={props.d.name}/> */}
  </Card> 
  );
}

export default Product;
