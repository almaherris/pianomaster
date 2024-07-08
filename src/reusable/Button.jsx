import PropTypes from "prop-types";
import "./Button.css"

export const Button = ({buttonText}) => {
  return (
    <button>{buttonText}</button>
  )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
  };