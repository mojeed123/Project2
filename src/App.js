import React from 'react'
import "./App.css"
import Navbar from "./Navi"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import kids from './Kids'
import Brands from './Brands'
import Location from './Location'
import Home from './Home'
import Running from './Running'
import Bags from './Bags'
import Casual from './Casual'
import Clothing from './Clothing'
import Jackets from './Jackets'
import Hoodies from './Hoodies'
import Shirt from './Shirt'
import Contact from './Contact'
import Accessories from './Accessories'
import Shoes from './Shoes'
import Nike from './Nike'
import Adidas from './Adidas'
import {Dropdown,DropdownButton} from 'react-bootstrap'
import Confirmation from './Confirmation'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'
import Review from './Review'
import Hats from './Hats'
import WomenJackets from './WomenJackets'
import WomenHoodies from './WomenHoodies'
import WomenShirt from './WomenShirt'
import Socks from './Socks'
import Puma from './Puma'

import logo from './logo.svg';
import './App.css';


function App() {
  return (
  <div>
  
      
   
  
      <Navbar />
      <Router>
        <Routes>

          <Route path="/home" exact element={<Home/>}></Route>
         <Route path="/location" exact element={<Location/>}></Route>
         <Route path="/contact" exact element={<Contact/>}></Route>
         <Route path="/accessories" exact element={<Accessories/>}></Route>
         <Route path="/hats" exact element={<Hats/>}></Route>
         <Route path="/confirmation" exact element={<Confirmation/>}></Route>
         <Route path="/WomenJackets" exact element={<WomenJackets/>}></Route>
         <Route path="/WomenHoodies" exact element={<WomenHoodies/>}></Route>
         <Route path="/WomenShirt" exact element={<WomenShirt/>}></Route>
         <Route path="/Socks" exact element={<Socks/>}></Route>


          <Route path="/mens" exact element={<Mens/>}></Route>
          <Route path="/womens" exact element={<Womens/>}></Route>
          <Route path="/running" exact element={<Running/>}></Route>
          <Route path="/bags" exact element={<Bags/>}></Route>
          <Route path="/casual" exact element={<Casual/>}></Route>
          <Route path="/clothing" exact element={<Clothing/>}></Route>
          <Route path="/jackets" exact element={<Jackets/>}></Route>
          <Route path="/hoodies" exact element={<Hoodies/>}></Route>
          <Route path="/shirt" exact element={<Shirt/>}></Route>
          <Route path="/shoes" exact element={<Shoes/>}></Route>
          <Route path="/nike" exact element={<Nike/>}></Route>
          <Route path="/adidas" exact element={<Adidas/>}></Route>
          <Route path="/puma" exact element={<Puma/>}></Route>

          <Route path="/review" exact element={<Review/>}></Route>





          
          <Route path="/kids" exact element={<Kids/>}></Route>
          <Route path="/brands" exact element={<Brands/>}></Route>
        </Routes>
      </Router>

      
        
    </div>
  )
}
  
export default App;
