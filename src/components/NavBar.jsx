import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <>
      {/* Phone */}

      {/* Tablet */}
      <div className="navbar">
        <div>
          <Link to="/">PianoMäster</Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to={"/butik"}>Butiken</Link>
          </li>
          <li>
            <Link to={"/flyglar"}>Flyglar</Link>
          </li>
          <li>
            <Link to={"/piano"}>Pianon</Link>
          </li>
          <li>
            <Link to={"/kontakt"}>Kontakt</Link>
          </li>
          <li>
            <Link to={"/kopvillkor"}>Köpvillkor</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
