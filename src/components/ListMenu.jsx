import { NavLink } from "react-router-dom"

function ListMenu() {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <NavLink className="nav-link text-primary" to="/">HOME</NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink className="nav-link text-danger" to="/about">CHI SIAMO</NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink className="nav-link text-warning" to="/posts">POSTS</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ListMenu
