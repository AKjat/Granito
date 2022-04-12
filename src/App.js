import React, { useEffect, useState } from 'react';
import './App.css';
import {  createTheme, ThemeProvider } from "@mui/material";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { orange, red } from '@mui/material/colors';
import MobileAppbar from './components/mobileNavigation/MobileAppbar';
import ProductPage from './pages/product/ProductPage';
import Filterpage from './pages/home/filter/Filterpage';
import HomeCateg from './components/categlist/HomeCateg';
import productDetails from "./data/Details"
import Footer from './components/main/Footer';
import NewArrival from "./data/NewArrival";
import MostDemanding from "./data/MostDemanding"
import CartPage from './pages/cart/CartPage';

import { CartState } from './context/Context';
// import SignInPage from './pages/SignIn/SignInPage';

const theme = createTheme({
  palette: {
      primary:{
        dark: orange[800],
        main: orange[500],
        light: orange[300]
    },
      secondary:{
        dark: "#c2c2c2",
        main: "#fff",
        light: "#f0f0f0"
    }
  },
  typography: {
      h5: {
        fontSize: '1.7rem',
        
      },
      h6: {
        fontSize: '1.3rem'
      }
  },
  
});
function App(props) {
  const {cart,product, addToCartAction, updateCartUnits, RenderProduct} = props;
  // const [items, setItems] = useState(productDetails);
  // const AllItems = productDetails.concat(NewArrival) 
  const AllItems = [...productDetails, ...NewArrival, ...MostDemanding ];
  // const AllItems = [...AllIte, ...MostDemanding]
  const [items, setItems] = useState(AllItems);
  // console.log(productDetails)
  console.log(AllItems)
  // console.log(NewArrival)
  const handleCateg = (categ) => {
    const updatedItems = productDetails.filter((curElem) => {
      return curElem.type === categ;
    });
    setItems(updatedItems);
  };
  const handleAll = (cat) => {
    const pdetails = productDetails.filter((curElem) => {
      return curElem;
    });
    setItems(pdetails);
  };
 
 
  
  return (
    <Router>
      {/* <Sidebar /> */}
      <ThemeProvider theme={ theme } >
      <Header />
      <HomeCateg handleCateg={handleCateg} handleAll={handleAll}/>
        <Routes>
        {/* <Route exact path="/login*" element={<SignInPage/>} /> */}
          <Route exact path="*" element={<Home handleCateg={handleCateg} items={items} NewArrival={NewArrival} MostDemanding={MostDemanding}/>} />
          
          <Route exact path="/products/:id/*" element={<ProductPage items={items} addToCartAction={addToCartAction} product={product} />} />
          
          <Route exact path="/products" element={<Filterpage items={items} RenderProduct={RenderProduct} />} />
          <Route exact path="/cart" element={<CartPage updateCartUnits={updateCartUnits} cart={cart}/>} />
          {/* <Route exact path="/products/filter" element={<Filterpage />} /> */}
          {/* <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/products/productdetails" element={<ProductDetails />} /> */}
        </Routes>
        {/* <Footer/> */}
        <MobileAppbar />
      </ThemeProvider>
    </Router>
  );
}





export default App;
