import { NavLink } from "react-router-dom"

function ListMenu() {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <NavLink class="nav-link" to="/">HOME</NavLink>
          </li>
          <li class="nav-item mx-3">
            <NavLink class="nav-link" to="/about">CHI SIAMO</NavLink>
          </li>
          <li class="nav-item mx-3">
            <NavLink class="nav-link" to="/posts">POSTS</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ListMenu
