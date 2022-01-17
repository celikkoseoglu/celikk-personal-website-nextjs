import React from "react";
import PropTypes from "prop-types";
import {
  contentDiv,
  description,
  image,
  imageDiv,
} from "../stylesheets/components/SkillCard.module.sass";

const SkillCard = ({ imageLink, imageAlt, text }) => {
  return (
    <div className={contentDiv}>
      <div className={`${imageDiv}`}>
        <img className={image} src={imageLink} alt={imageAlt} />
      </div>
      <p className={description}>{text}</p>
    </div>
  );
};

SkillCard.propTypes = {
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;
