import AboutMe from "../components/Section/AboutMe";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";
import Projects from "../components/Section/Projects";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import Container from "../components/Util/Container";
import {
  footerBackground,
  footerPadding,
  skillsBackground,
  noMargin,
} from "../stylesheets/Home.module.sass";
import Skills from "../components/Section/Skills";
import Footer from "../components/Footer/Footer";
import BlogShowcase from "../components/Section/BlogShowcase";
import { getMeta } from "../components/Util/MetaGenerator";

const content = require("../data/content.json");

export default function Home() {
  const horizontalRuler = (
    <div className={skillsBackground}>
      <Container>
        <HorizontalRuler isThick className={noMargin} />
      </Container>
    </div>
  );

  const meta = getMeta(
    content.pageTitle,
    content.pageDescription,
    "/images/meta/home.png",
    content.metaImageAlt
  );

  return (
    <>
      {meta}
      <NavigationBar />
      <Landing
        id={content.landingReference}
        arrowAnimationReference={content.aboutMeReference}
      />
      <AboutMe id={content.aboutMeReference} />
      {horizontalRuler}
      <Projects id={content.projectsReference} />
      {horizontalRuler}
      <Skills id={content.skillsReference} />
      {horizontalRuler}
      <BlogShowcase id={content.latestBlogPostsReference} />

      <div
        id={content.contactReference}
        className={`${footerBackground} ${footerPadding}`}
      >
        <Container noPadding>
          <Footer />
        </Container>
      </div>
    </>
  );
}
