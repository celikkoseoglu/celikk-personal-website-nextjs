import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  heroContainer,
  arrowMargin,
  arrowSize,
  heroBackground
} from "../../stylesheets/components/Section/Landing.module.sass";
import Container from "../Util/Container";
import Hero from "../Hero";
import { isIPad13 } from "react-device-detect";
import NoSSR from "react-no-ssr";
import { getRandomInt } from "../../utils/FileManager.utils";
import ArrowAnimation from "../Animations/ArrowAnimation";
import { debounce } from "../../utils/Limitors";

const hero = require("../../data/hero.json");

const imagePaths = [
  "/images/hero/balcony.jpg",
  "/images/hero/beachCoding.jpg",
  "/images/hero/cliffWalking.jpg",
  "/images/hero/kayaking.jpg",
  "/images/hero/wallAnkara.jpg",
  "/images/hero/wallLondon.jpg"
];

let windowInnerWidth = 0;

const Landing = ({ id, arrowAnimationReference }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleResize = () => {
    const currentWindowInnerWidth = window.innerWidth;
    if (currentWindowInnerWidth !== windowInnerWidth) {
      windowInnerWidth = currentWindowInnerWidth;
      const windowInnerHeight = window.innerHeight;
      document.documentElement.style.setProperty(
        "--windowInnerHeight",
        `${windowInnerHeight}px`
      );
    }
  };

  if (isIPad13) {
    handleResize();
  }

  useEffect(() => {
    const randomLandingImageNumber = getRandomInt(imagePaths.length);
    setImageUrl(imagePaths[randomLandingImageNumber]);

    if (isIPad13) {
      window.addEventListener("resize", debounce(handleResize));
    }

    return () => {
      if (isIPad13) {
        window.removeEventListener("resize", debounce(handleResize));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const basicPrerender = (
    <header
      id={id}
      style={
        imageUrl && {
          backgroundImage: `url(${imageUrl})`
        }
      }
      className={`${heroBackground}`}
    >
      <Container className={heroContainer}>
        <Hero
          introHeading={hero.introHeading}
          introLeadIn={hero.introLeadIn}
          resumeButtonText={hero.resumeButtonText}
          resumeLink={hero.resumeButtonLink}
        />
      </Container>

      <NoSSR>
        <ArrowAnimation
          className={`${arrowMargin} ${arrowSize}`}
          reference={arrowAnimationReference}
        />
      </NoSSR>
    </header>
  );

  return basicPrerender;
};
Landing.propTypes = {
  id: PropTypes.string.isRequired,
  arrowAnimationReference: PropTypes.string.isRequired
};

export default Landing;
