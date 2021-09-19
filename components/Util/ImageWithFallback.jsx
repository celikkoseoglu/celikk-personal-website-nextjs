import React from "react";
import PropTypes from "prop-types";

// https://www.joshwcomeau.com/performance/embracing-modern-image-formats/
// allows webp compatible browsers to download webp versions of images
const ImageWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.node,
  fallback: PropTypes.string,
};

ImageWithFallback.defaultProps = {
  src: null,
  fallback: null,
};

export default ImageWithFallback;
