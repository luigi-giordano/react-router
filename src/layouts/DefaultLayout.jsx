import { Outlet } from "react-router-dom"
import ListMenu from "../components/ListMenu"
const DefaultLayout = () => {
  return (
    <>
      <header>

        <ListMenu />

      </header>
      <main>

        <Outlet />

      </main>
      <footer>

        FOOTER

      </footer>
    </>
  )
}

export default DefaultLayout