import { NavLink } from "react-router-dom";

// import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <NavLink to="/profile ">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/messages ">Messages</NavLink>
      </div>
      <div>
        <a href=" ">News</a>
      </div>
      <div>
        <a href=" ">Music</a>
      </div>
      <div>
        <a href=" ">Setting</a>
      </div>
    </div>
  );
};

export default Navbar;
