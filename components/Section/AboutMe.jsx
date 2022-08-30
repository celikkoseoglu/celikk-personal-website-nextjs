import React from "react";
import Markdown from "markdown-to-jsx";
import {
  description,
  image,
  descriptionRow,
  listPadding,
} from "../../stylesheets/components/Section/AboutMe.module.sass";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";

const aboutMe = require("../../data/aboutMe.json");

const AboutMe = () => (
  <Section>
    <Container>
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

export default AboutMe;
