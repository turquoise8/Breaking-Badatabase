import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../BBlogo.png";
import { useGlobalContext } from "../context";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const searchValue = useRef("");
  const { setSearchTerm } = useGlobalContext();

  const goToHomePage = () => {
    setSearchTerm("");
    searchValue.current.value = "";
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" onClick={goToHomePage}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <SearchForm searchValue={searchValue} />
        <ul className="nav-links">
          <li>
            <Link onClick={goToHomePage} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
