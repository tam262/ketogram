import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">ENTRIES</Link>
      <Link to="/library">FOOD</Link>
    </div>
  );
};

export default Header;
