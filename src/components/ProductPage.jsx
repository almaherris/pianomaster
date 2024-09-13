import PropTypes from "prop-types"
import "./ProductPage.css"

export const ProductPage = ({ title, description }) => {
  return (
    <div className="product-page">
      <div className="product-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="product-gallery">
        <p>here goes img gallery</p>{" "}
      </div>{" "}
    </div>
  )
}

ProductPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
