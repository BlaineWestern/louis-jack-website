import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const activeStyle = {
  color: "black",
  backgroundColor: "whitesmoke",
  textDecoration: "none",
}

const Header = ({ siteTitle }) => (
  <header className="nav-container">
    <div className="nav-items">
      <div className="nav-spacer"></div>
      <div>
        <Link to="/films" className="link" activeStyle={activeStyle}>
          FILMS
        </Link>
      </div>
      <div className="nav-spacer"></div>
      <div>
        <Link to="/about" className="link" activeStyle={activeStyle}>
          ABOUT
        </Link>
      </div>
      <div className="nav-spacer"></div>
      <div>
        <Link to="/contact" className="link" activeStyle={activeStyle}>
          CONTACT
        </Link>
      </div>
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
