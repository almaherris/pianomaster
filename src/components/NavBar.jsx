import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { useState } from "react"
import "./NavBar.css"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      //Scroll to top if on homepage
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      //Navigate to homepage if on another page
      navigate("/")
    }
  }

  return (
    <div className="navbar">
      {/* Phone */}
      <nav className="navsection-phone">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </div>
        <div className={`dropdown-menu ${showMenu ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/butik"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Butiken
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flyglar"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Flyglar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pianon"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Pianon
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tjanster"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Tjänster
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="navbar-logo"
            src="/logos/pm-logo.png"
            alt="Pianomäster Logo"
            onClick={handleLogoClick}
          />
        </div>
      </nav>

      {/* Tablet and up*/}
      <nav className="navsection-tablet">
        <div>
          <img
            className="navbar-logo"
            src="/logos/pm-logo.png"
            alt="Pianomäster Logo"
            onClick={handleLogoClick}
          />
        </div>
        <ul className="navigation">
          <li>
            <NavLink
              to="/butik"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Butiken
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/flyglar"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Flyglar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pianon"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Pianon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tjanster"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Tjänster
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontakt"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
