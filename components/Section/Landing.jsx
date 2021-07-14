import React from "react";
import PropTypes from "prop-types";
import {heroBackground, heroContainer,} from "../../stylesheets/components/Section/Landing.module.sass";
import Container from "../Util/Container";
import Hero from "../Hero";

const hero = require("../../data/hero.json");


let windowInnerWidth = 0;

const Landing = ({ id, arrowAnimationReference }) => {
  /* the rendering of this component needs to be deferred because react-snap tries to take a
     snapshot of the progressive image before the final image loads. This breaks progressive
     image loading. Until react-snap provides an `exclude` option, deferring the rendering of
     this component seems to be the simplest solution.
   */
  const basicPrerender = (
    <header id={id} className={`${heroBackground}`}>
      <Container className={heroContainer}>
        <Hero
          introHeading={hero.introHeading}
          introLeadIn={hero.introLeadIn}
          resumeButtonText={hero.resumeButtonText}
          resumeLink={hero.resumeButtonLink}
        />
      </Container>
    </header>
  );


  return basicPrerender;
};
Landing.propTypes = {
  id: PropTypes.string.isRequired,
  arrowAnimationReference: PropTypes.string.isRequired,
};

export default Landing;
