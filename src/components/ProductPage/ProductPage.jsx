import PropTypes from "prop-types"
import "./ProductPage.css"

export const ProductPage = ({ title, description, section }) => {
  return (
    <div className="product-page">
      <div className="product-text">
        <h2>{title}</h2>
        {Array.isArray(description) ? (
          description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>{description}</p>
        )}{" "}
      </div>
      {section && <div className="product-section">{section}</div>}
    </div>
  )
}

ProductPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  section: PropTypes.element,
}
