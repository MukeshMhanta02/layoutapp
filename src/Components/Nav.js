import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
      <nav>
        <div className='logo'>
        <img src="./assets/img/logo.png" alt="" /> Company
        </div>
        <ul>
          <li>
            <NavLink to="./dashboard"> <span><img src="./assets/img/ic/dashboard_ic.svg" alt="" /></span> Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="./request"><span><img src="./assets/img/ic/upload_ic.svg" alt="" /></span> Request</NavLink>
          </li>
          <li>
            <NavLink to="./search"><span><img src="./assets/img/ic/search_ic.svg" alt="" /></span> Search</NavLink>
          </li>
          <li>
            <NavLink to="./files"><span><img src="./assets/img/ic/reports_ic.svg" alt="" /></span> Files</NavLink>
          </li>
          <li>
            <NavLink to="./users"><span><img src="./assets/img/ic/user_ic.svg" alt="" /></span> Users</NavLink>
          </li>
          <li>
            <NavLink to="./fields"><span><img src="./assets/img/ic/compared_ic.svg" alt="" /></span> Compared Field</NavLink>
          </li>
        </ul>
      </nav>
    )
}
