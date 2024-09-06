import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./Button.css"

export const Button = ({
  buttonText,
  link = null,
  onClick = null,
  variant = "default",
}) => {
  const buttonClass =
    variant === "alternate" ? "button-alternate" : "button-default"

  if (link) {
    return (
      <Link to={link}>
        <button className={buttonClass}>{buttonText}</button>
      </Link>
    )
  }

  return <button onClick={onClick}>{buttonText}</button>
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "alternate"]),
}
