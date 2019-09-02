import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="nav-container">
    <div className="nav-items">
    <div className="nav-spacer"></div>
    <div ><Link to="/films" className="link" activeStyle={{ color: "black" , backgroundColor: "whitesmoke", textDecoration: "none"}} >FILMS</Link></div>
    <div className="nav-spacer"></div>
    <div ><Link to="/about" className="link" activeStyle={{ color: "black" , backgroundColor: "whitesmoke", textDecoration: "none"}} >ABOUT</Link></div>
    <div className="nav-spacer"></div>
    <div ><Link to="/contact" className="link" activeStyle={{ color: "black" , backgroundColor: "whitesmoke", textDecoration: "none"}} >CONTACT</Link></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


// activeClassName="active-nav-link"