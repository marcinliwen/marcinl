import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        flexDirection: `column`,
        height: `100%`
      }}
    >
      {/*<h1 style={{ margin: 0, position: `absolute`, top: `0px`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        </h1>*/}
      <ul style={{ 
        listStyle: `none`, 
        display: `flex`, 
        flexDirection: `column`,
        margin: `auto`,
        textAlign: `center`
        }}>
          <li style={{ margin: `20px 10px` }}>
            <Link
              to={`/#welcome`}
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              Welcome
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }}>
            <Link
              to={`/#about`}
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              About
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }}>
            <Link
              to={`/#projects`}
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `sans-serif`,
              }}
            >
              Projects
            </Link>
          </li>
          <li style={{ margin: `20px 10px` }}>
            <Link
              to={`/#contact`}
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
