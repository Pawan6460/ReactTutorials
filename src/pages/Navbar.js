import React, { memo } from "react";
import { Link } from "react-router-dom";

import "../App.css"
const Navbar = (props) => {
  const navbarItems = props.items;
  return (
    <ul>
      {navbarItems.map((e) => <li key={e.name}><Link to={e.path} style={{color: 'orange'}}>{e.name}</Link></li>)}
    </ul>
  );
};

//<Link> is used to set the URL and keep track of browsing history.
// memo helps in preventing re-rendering component, it only updates the component 
// when there are valid prop changes
export default memo(Navbar);