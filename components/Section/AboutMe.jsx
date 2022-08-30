import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import Heading from "../Heading";
import {
  description,
  image,
  ruler,
  heading,
  titleRow,
  descriptionRow,
  listPadding,
} from "../../stylesheets/components/Section/AboutMe.module.sass";
import HorizontalRuler from "../Util/HorizontalRuler";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";

const aboutMe = require("../../data/aboutMe.json");

const AboutMe = ({ id }) => (
  <Section id={id}>
    <Container>
      <Row className={titleRow}>
        <Heading text={aboutMe.title} className={heading} />
        <HorizontalRuler isThick className={ruler} />
      </Row>
      <Row className={descriptionRow}>
        <div className={description}>
          <p>{aboutMe.descriptionHead}</p>

          <Markdown className={listPadding}>
            {aboutMe.items.join("\n")}
          </Markdown>

          <p>{aboutMe.descriptionTail}</p>
        </div>
        <img
          className={image}
          alt={aboutMe.portraitAlt}
          src="/images/aboutMe/celik.jpg"
        />
      </Row>
    </Container>
  </Section>
);

AboutMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutMe;
