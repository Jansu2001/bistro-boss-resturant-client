import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import {  NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart]=useCarts()
  // TODO : Load data from the server to have dynamic isAdmin based on data

  const [isAdmin]=useAdmin()
  

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
         <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            {/* <!-- Sidebar content here --> */}
            {
              isAdmin 
              ? 
              <>
              <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Add Items</NavLink></li>
            <li><NavLink to='/dashboard/payhistory'><FaWallet></FaWallet>Manage Items</NavLink></li>
            <li><NavLink to='/dashboard/carts'><FaShoppingCart></FaShoppingCart>Manage Bookings</NavLink></li>
            <li><NavLink to='/dashboard/allusers'><FaShoppingCart></FaShoppingCart>All Users</NavLink></li>
              </>
              
              :
              <>
              <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
            <li><NavLink to='/dashboard/payhistory'><FaWallet></FaWallet>Payment History</NavLink></li>
            <li><NavLink to='/dashboard/carts'><FaShoppingCart></FaShoppingCart>My Cart<span className="badge badge-primary">+{cart?.length ||0 }</span> </NavLink></li>
            <li><NavLink to='/dashboard/review'><FaShoppingCart></FaShoppingCart>Add Review</NavLink></li>
            <li><NavLink to='/dashboard/mybooking'><FaShoppingCart></FaShoppingCart>My Booking</NavLink></li>
              </>
            }
            
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to='/'><FaHome></FaHome>Menu</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
