import PropTypes from "prop-types"
import "./Service.css"

//Container for each individual service
export const Service = ({
  title,
  description,
  pricingTitle,
  pricingDescription,
}) => {
  return (
    <div className="service">
      service
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{pricingTitle}</h3>
      <p>{pricingDescription}</p>
    </div>
  )
}

Service.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pricingTitle: PropTypes.string,
  pricingDescription: PropTypes.string,
}
