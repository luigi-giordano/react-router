import { NavLink } from "react-router-dom"

function ListMenu() {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/about'>CHI SIAMO</NavLink></li>
        <li><NavLink to='/contacts'>CONTATTI</NavLink></li>
      </ul>
    </nav>
  )
}

export default ListMenu
