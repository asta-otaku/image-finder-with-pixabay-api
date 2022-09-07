import React, { useState } from "react";
import PropTypes from "prop-types";

function ImageResults(props) {
  let imageListContent;
  const { images } = props;
  const [popView, setPopView] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [setBackdrop] = useState(false);

  const handleRemove = () => {
    setPopView(false);
    setBackdrop(false);
  };

  if (images) {
    imageListContent = (
      <div className="card-container">
        {images.map((img) => (
          <div
            className="image-card"
            key={img.id}
            onClick={() => {
              setCurrentImage(img.largeImageURL);
              setPopView(true);
              setTimeout(() => {
                setBackdrop(true);
              }, 10);
            }}
          >
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

  return (
    <>
      {popView ? (
        <div onClick={handleRemove} className={"backdrop open"}></div>
      ) : null}
      <div onClick={handleRemove} className={popView ? "modal open" : "modal"}>
        <img src={`${currentImage}`} alt="" />
      </div>
      <div>{imageListContent}</div>

      {/* {popView ? (
        <>
          <div onClick={handleRemove} className={"backdrop open"} />
          <div className="pop-header" onClick={handleRemove}>
            <img src={`${currentImage}`} alt="" />
          </div>
        </>
      ) : (
        <div>{imageListContent}</div>
      )} */}
    </>
  );
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
