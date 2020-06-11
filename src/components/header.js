import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,  { useState } from "react"

const Header = ({ siteTitle }) =>{ 
  const [openMenu, setOpenMenu] = useState(false);
  return(
  <header
    className={openMenu?"-open":""}
  >
    <div  className="open-menu-container">
      <button id="open-menu" onClick={()=>setOpenMenu(!openMenu)} className="menu-shadow">
        <svg enableBackground="new 0 0 64 64" height="38" viewBox="0 0 64 64" width="38"><path fill="#fff" d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg>
      </button>
    </div>
    <div className="menu-nav">
      <ul style={{ 
        listStyle: `none`, 
        display: `flex`, 
        flexDirection: `column`,
        margin: `auto`,
        textAlign: `center`
        }}>
          <li style={{ margin: `20px 10px` }} onClick={()=>setOpenMenu(!openMenu)}>
            <Link
              to={`/#welcome`}
              className="nav-link"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              Welcome
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }} onClick={()=>setOpenMenu(!openMenu)}>
            <Link
              to={`/#about`}
              className="nav-link"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              About
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }} onClick={()=>setOpenMenu(!openMenu)}>
            <Link
              to={`/#timeline`}
              className="nav-link"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              Timeline
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }} onClick={()=>setOpenMenu(!openMenu)}>
            <Link
              to={`/#projects`}
              className="nav-link"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              Projects
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }} onClick={()=>setOpenMenu(!openMenu)}>
            <Link
              to={`/#contact`}
              className="nav-link"
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              Contact
            </Link>
          </li>
      </ul>
    </div>
    
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
