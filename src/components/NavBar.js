import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav-bar">
          <li>
            <Link to="/">Login Page</Link>
          </li>
          <li>
            <Link to="/Home">Go Home</Link>
          </li>
          {/* <li>
            <Link to="/Kygo">Kygo</Link>
          </li> */}
        </ul>
      </div>
    )
  }
}

export default NavBar
