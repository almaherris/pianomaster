import PropTypes from "prop-types"
import { Button } from "../Button"
import "./OfferSection.css"

export const OfferSection = ({
  title,
  description,
  buttonText,
  link,
  ariaLabel,
  imgSrc,
  imgPosition,
}) => {
  return (
    <div className="offer-section-wrapper">
      <div className={`offer-section ${imgPosition}`}>
        <div className="text-section">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button
            buttonText={buttonText}
            link={link}
            aria-label={ariaLabel}
          />{" "}
        </div>

        <div className="img-container">
          <img src={imgSrc} alt={title} />
        </div>
      </div>
    </div>
  )
}

OfferSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgPosition: PropTypes.oneOf(["left", "right"]).isRequired,
}
