import { Link } from "react-router-dom"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { useState } from "react"
import "./NavBar.css"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <>
      {/* Phone */}
      <nav className="navsection-phone">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </div>
        <div className={`dropdown-menu ${showMenu ? "open" : ""}`}>
          <ul>
            <li>
              <Link to={"/butik"} onClick={closeMenu}>
                Butiken
              </Link>
            </li>
            <li>
              <Link to={"/flyglar"} onClick={closeMenu}>
                Flyglar
              </Link>
            </li>
            <li>
              <Link to={"/pianon"} onClick={closeMenu}>
                Pianon
              </Link>
            </li>
            <li>
              <Link to={"/tjanster"} onClick={closeMenu}>
                Tjänster
              </Link>
            </li>{" "}
            <li>
              <Link to={"/kontakt"} onClick={closeMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/" onClick={closeMenu}>
            <img
              className="navbar-logo"
              src="/logos/pm-logo.png"
              alt="Pianomäster Logo"
            />
          </Link>
        </div>
      </nav>

      {/* Tablet */}
      <nav className="navsection-tablet">
        <div>
          <Link to="/">
            <img
              className="navbar-logo"
              src="/logos/pm-logo.png"
              alt="Pianomäster Logo"
            />
          </Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to={"/butik"}>Butiken</Link>
          </li>
          <li>
            <Link to={"/flyglar"}>Flyglar</Link>
          </li>
          <li>
            <Link to={"/pianon"}>Pianon</Link>
          </li>{" "}
          <li>
            <Link to={"/tjanster"}>Tjänster</Link>
          </li>
          <li>
            <Link to={"/kontakt"}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
