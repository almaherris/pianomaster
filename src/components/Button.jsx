import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./Button.css"

export const Button = ({ buttonText, link = null, onClick = null }) => {
  if (link) {
    return (
      <Link to={link}>
        <button>{buttonText}</button>
      </Link>
    )
  }

  return <button onClick={onClick}>{buttonText}</button>
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
}
