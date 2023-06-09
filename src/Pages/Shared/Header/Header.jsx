import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";

const Header = () => {

  const {user,signInOutUser}=useContext(AuthContext)
  const [cart]=useCarts()

  const handleLogOUt=()=>{
    signInOutUser()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  const navItems = (
    <>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/">HOME</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/contact">CONTACT US</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/secret">SECRET</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/dashboard">DASHBOARD</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="dashboard/carts"><button className="btn gap-2"><FaShoppingCart></FaShoppingCart> <div className="badge badge-primary">+{cart?.length ||0 }</div></button></NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/menu">OUR MENU</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/order/salad">ORDER FOOD</NavLink></li>
      {user 
      ? 
      <li><button onClick={handleLogOUt} className="btn btn-ghost text-red-400">LOG OUT</button></li>
      :
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/login">LOGIN</NavLink></li>
      }
    </>

    
  );
  return (
    <div className="navbar bg-black text-white max-w-screen-xl fixed z-10 bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Link to='/' className="btn btn-ghost normal-case  lg:text-2xl ">Bistro Boss</Link>
          <small>Resturant</small>
        </div>
      </div>
      <div className="navbar-end">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      </div>
    </div>
  );
};

export default Header;
