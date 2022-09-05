import React from "react";
import PropTypes from "prop-types";

function ImageResults(props) {
  let imageListContent;
  const { images } = props;

  if (images) {
    imageListContent = (
      <div className="card-container">
        {images.map((img) => (
          <div className="image-card" key={img.id}>
            <img src={img.largeImageURL} alt="" />
            <div className="image-details">
              {img.tags}{" "}
              <span>
                by <strong>{img.user}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    imageListContent = null;
  }

  return <div>{imageListContent}</div>;
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
