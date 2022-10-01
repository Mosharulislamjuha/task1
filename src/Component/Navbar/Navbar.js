import React from "react";
 
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="Contact_container">
        <div className="Contact_Media">
            <span>
            <i class="fas fa-phone-alt"></i> 01858098309
            </span>
            <span>
            <i class="fas fa-envelope"></i> juha@cse.com
            </span>
        </div>
        <div className="Contact_Media">
          
          <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/"> <i class="fab fa-twitter"></i></a>
          
        </div>
      </div>
      <div className="navbar1">
      <div className="logo">
          <h3>
            <span>Ta</span>sk1
          </h3>
        </div>
        <div className="navbar_container">
          <ul className="nav_items  nav_items">
            <li className="nav_item"  >
              HOME
            </li>
            <li className="nav_item"  >
              WOMEN
            </li>
            <li className="nav_item"  >
              MEN
            </li>
            <li className="nav_item"  >
              KIDS
            </li>
            <li className="nav_item"  >
              JEWELLERY
            </li>
            <li className="nav_item"  >
              ACCESSORIES
            </li>
          </ul>
        </div>
        <div>
          <div className="navbar_icon" >
            <div className="shopping_cart">
              <i class="fas fa-shopping-cart"></i>
              <span className="shopping_count">1</span>
            </div>
            <i class="fas fa-search"></i>
            
          </div>  
          </div>
        
      </div>
       
    </div>
  );
};
export default Navbar;
