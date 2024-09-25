import PropTypes from "prop-types"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "./Gallery.css"
import { getOptimizedUrl } from "../../util/utils"

export const Gallery = ({ images }) => {
  const [open, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <>
      {/* Image grid */}
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={getOptimizedUrl(image.src, 650)}
            alt={`Gallery Image ${index + 1}`}
            className="image-grid-item"
            onClick={() => {
              setPhotoIndex(index)
              setOpen(true)
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={photoIndex}
          onIndexChange={setPhotoIndex}
        />
      )}
    </>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
}
