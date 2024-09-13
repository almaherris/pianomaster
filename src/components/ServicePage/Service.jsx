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
      <div className="service-description">
        <h2>{title}</h2>
        {description.map((description, index) => (
          <p className="" key={index}>{description}</p>
        ))}
      </div>
      <div className="service-pricing">
        <h3>{pricingTitle}</h3>
        <ul>
          {pricingDescription.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>{" "}
      </div>
    </div>
  )
}

Service.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pricingTitle: PropTypes.string,
  pricingDescription: PropTypes.arrayOf(PropTypes.string),
}
