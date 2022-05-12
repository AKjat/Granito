import { Skeleton } from '@mui/material';
import React, { Component } from 'react';
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";


import '../Categories/HomeGridCarousel.css';

const HomeGridCarousel = ({item, loading}) =>{
    const ps = item?item:null
  const [products, setProducts] = React.useState();
  React.useEffect(() => {
    setProducts(ps)
  }, [ps]);
    // const breakPoints = [
    //     {width: 1, itemsToShow: 1},
    //     {width: 500, itemsToShow: 2},
    //     {width: 768, itemsToShow: 3},
    //     {width: 1200, itemsToShow: 4},
    // ];
    const skeArr =[1,2,3,4]
    return(
        <section className="categories-section">
            <Carousel cols={4} showDots loop   className="carousel">
            {loading && skeArr.map((d, index)=>(<Carousel.Item key={index} >
                <Skeleton variant="rectangular" height="220px" animation="wave"  />
            </Carousel.Item>))}
            {!loading && products?.map((d, index)=>(
                    <Carousel.Item key={index} >
                    <Link to={`/product/${d.id}`}>
                         <div className='cat'>
                             <img src={d.images[0]?.image}  alt={d.name} />
                             <div className='details'>
                                 <p>{d.name}</p>
                             </div>
                         </div>
                     </Link>
                    </Carousel.Item>
                ))}



                {/* {props.data.map((d, index)=>(
                    <Carousel.Item key={index} >
                    <Link to={`/products/${d.id}/${d.name}`}>
                         <div className='cat'>
                             <img src={d.img}  alt="brochure" />
                             <div className='details'>
                                 <p>{d.name}</p>
                             </div>
                         </div>
                     </Link>
                    </Carousel.Item>
                ))} */}
               
               {/* <Carousel.Item >
               <Link to={`/products/${'brochure'}`}>
                    <div className='cat'>
                        <img src="img/product/p7.jpg" alt="brochure" />
                        <div className='details'>
                            <p>Granites</p>
                        </div>
                    </div>
                </Link>
               </Carousel.Item>
               <Carousel.Item >
               <Link to={`/products/${'food packs'}`}>
                    <div className='cat'>
                        <img src="img/product/p8.jpg" alt="Food Packs" />
                        <div className='details'>
                            <p>Imported Marbles</p>
                        </div>
                    </div>
                </Link>
               </Carousel.Item>
               <Carousel.Item >
               <Link to={`/products/${'calendars'}`}>
                    <div className='cat'>
                        <img src="img/product/p4.jpg" alt="Calendars" />
                        <div className='details'>
                            <p>Marble Tiles</p>
                        </div>
                    </div>
                </Link>
               </Carousel.Item>
               <Carousel.Item >
               <Link to="/products">
                    <div className='cat more'>
                        <img src="img/product/p8.jpg" alt="Food Packs" />
                        <div className='details'>
                            <p>View More</p>
                        </div>
                    </div>
                </Link>
               </Carousel.Item>
               <Carousel.Item >
               <Link to={`/products/${'brochure'}`}>
                    <div className='cat'>
                        <img src="img/product/p7.jpg" alt="brochure" />
                        <div className='details'>
                            <p>Granites</p>
                        </div>
                    </div>
                </Link>
               </Carousel.Item> */}
            </Carousel>
    {/* <div className="back"> */}
        
    {/* </div> */}
    {/* <Outlet /> */}
</section>
    )

}

export default HomeGridCarousel ;