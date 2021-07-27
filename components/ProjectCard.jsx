import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  point,
  imageDiv,
  description,
  contentDiv,
  mobileDescription,
  desktopDescription,
} from "../stylesheets/components/ProjectCard.module.sass";
import UnstyledLink from "./Util/UnstyledLink";

const ProjectCard = ({
  imageLink,
  imageAlt,
  title,
  subtitle,
  text,
  blogPost,
}) => {
  return (
    <div className={`${point}`}>
      <UnstyledLink to={`/blog/${blogPost}`}>
        <div className={`${contentDiv}`}>
          <img className={imageDiv} src={imageLink} alt={imageAlt} />
          <div className={description}>
            <h4>{title}</h4>
            <h6>{subtitle}</h6>
            <p className={desktopDescription}>{text}</p>
          </div>
          <p className={mobileDescription}>{text}</p>
        </div>
      </UnstyledLink>
    </div>
  );
};

ProjectCard.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  blogPost: PropTypes.string,
};

ProjectCard.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null,
  blogPost: null,
};

export default ProjectCard;
