import React from "react";
import PropTypes from "prop-types";
import {
  sectionPadding,
  sectionBackground,
} from "../../stylesheets/components/Util/Section.module.sass";

const Section = ({ className, children }) => (
  <section className={`${sectionBackground} ${sectionPadding} ${className}`}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: null,
};

export default Section;
