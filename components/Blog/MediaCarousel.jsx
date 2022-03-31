import React from "react";
import PropTypes from "prop-types";
import {
  autoSizeImage,
  autoSizeMultipleImage,
  darkMediaCarousel,
  horizontalOverflow,
  imageMargin,
  mediaCarousel,
  multipleImage,
} from "../../stylesheets/components/Blog/MediaCarousel.module.sass";
import ImageWithFallback from "../Util/ImageWithFallback";

const getImageLinkWithExtension = (imageLink) => {
  if (imageLink.endsWith(".png")) {
    return require(`../../public${(imageLink)}?webp`);
  }
  return imageLink;
};

const MediaCarousel = ({ folder, images, isDark }) => {
  const imageFileNames = images.split(",");
  const imagesToBeLoaded = [];

  for (let i = 0; i < imageFileNames.length; i += 1) {
    imagesToBeLoaded.push(`/images/blogPost/${folder}/${imageFileNames[i]}`);
  }

  return (
    <>
      <div
        align="center"
        className={`${horizontalOverflow} ${
          isDark ? darkMediaCarousel : null
        } ${mediaCarousel} ${imagesToBeLoaded.length > 1 && multipleImage}`}
      >
        {imagesToBeLoaded.map((imageRelativeLink, index) =>
          imageRelativeLink !== undefined &&
          imageRelativeLink.endsWith(".mp4") ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              className={`${autoSizeImage} ${
                imagesToBeLoaded.length > 1 && autoSizeMultipleImage
              } ${index > 0 && imageMargin}`}
              loop
              autoPlay
              playsInline
              muted
              key={imageRelativeLink}
            >
              <source src={"../.." + imageRelativeLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <ImageWithFallback
              src={getImageLinkWithExtension(imageRelativeLink)}
              alt={imageRelativeLink}
              key={imageRelativeLink}
              fallback={imageRelativeLink}
              className={`${autoSizeImage} ${
                imagesToBeLoaded.length > 1 && autoSizeMultipleImage
              } ${index > 0 && imageMargin}`}
            />
          )
        )}
      </div>
    </>
  );
};

MediaCarousel.propTypes = {
  folder: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

MediaCarousel.defaultProps = {
  isDark: false,
};

export default MediaCarousel;
