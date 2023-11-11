import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Products from '../components/products';

const Contactlayout = () => {
  return (
    <>
      <Products></Products>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'50px'}} className="text-center">
        <div className="" style={{ border:"2px solid #00FF00", width:'50%', borderRadius:'20px'}}>
          <NavLink style={{ textDecoration: "none" }} to="foods">
            <h3>Foods</h3>
          </NavLink>
          <hr />
          <NavLink style={{ textDecoration: "none" }} to="drinks">
            <h3>Drinks</h3>
          </NavLink>
          <hr />
          <NavLink style={{ textDecoration: "none" }} to="medicine">
            <h3>Medicine</h3>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Contactlayout;