import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
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
  )
}
