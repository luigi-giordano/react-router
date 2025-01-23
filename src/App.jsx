import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contacts" Component={ContactsPage} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
