import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"

export const Layout = () => {
  return (
    <>
      <NavBar />{" "}
      <main className="app-container" id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
