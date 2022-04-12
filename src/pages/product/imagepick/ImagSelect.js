import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const useStyles = makeStyles((theme)=>({
    boxImgSm:{
            [theme.breakpoints.down('md')]: {
                height: '25vh !important',
              },
              [theme.breakpoints.up('md')]: {
                height: '55vh !important',
              }   
    },
    boxImgBig:{
        zIndex: '1000'
    },
    imgList: {
        "& img":{
            cursor: 'pointer',
            
            opacity: '0.6',
            [theme.breakpoints.down('md')]: {
                height: 40,
              },
              [theme.breakpoints.up('md')]: {
                height: 50,
              }
        },
        "& img:hover":{
            opacity: '1'
        }
    }
}))

const ImagSelect = ({selectedProduct}) => {
    const [src, setsrc] = useState("/img/product/AlaskaGold/1.jpg");
    
   
    const imgClick =(url)=>{
        setsrc(url)
    }
   
    const classes= useStyles();
  return (
    <Grid container direction='column' alignItems='center' spacing={1}>
        <Grid item >
            <Box >
        <ReactImageMagnify imageClassName={classes.boxImgSm} 
                            enlargedImageClassName={classes.boxImgBig}
        {...{ 
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: src,
                            
                            
                        },
                        largeImage: {
                          
                            src: src,
                            width: 1447,
                            height: 1150,
                            
                        },
                        enlargedImageContainerDimensions:{width: '135%', height: '100%'},
                        shouldUsePositiveSpaceLens: true,
                        enlargedImageContainerStyle: {zIndex: 10,
                                                      borderRadius: 2,
                                                    boxShadow: 10}
                    }} />

            {/* <img id='box-img' className={classes.boxImgSm}  src={src} alt="" /> */}
            {/* xs:{height: '30vh'}, lg:{height: '45vh'} */}
            </Box>
        </Grid>
        <Grid item>
            <Grid container spacing={1} className={classes.imgList}>
                <Grid item>
                <img onMouseOver={()=>imgClick("/img/product/AlaskaGold/1.jpg")}  src="/img/product/AlaskaGold/1.jpg" alt="" />
                {/* onClick={()=>imgClick("/img/product/p1.jpg")} */}
                </Grid>
                <Grid item>
                <img onMouseOver={()=>imgClick("/img/product/AlaskaWhite/2.jpg")} src="/img/product/AlaskaWhite/2.jpg" alt=""/>
                </Grid>
                <Grid item>
                <img onMouseOver={()=>imgClick("/img/product/BlackMarcino/2.jpg")} src="/img/product/BlackMarcino/2.jpg" alt="" />
                </Grid>
                <Grid item>
                <img onMouseOver={()=>imgClick("/img/product/Red/1.jpg")} src="/img/product/Red/1.jpg" alt="" />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default ImagSelect;
