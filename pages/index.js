import AboutMe from "../components/Section/AboutMe";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";
import Projects from "../components/Section/Projects";
import Container from "../components/Util/Container";
import {
  footerBackground,
  footerPadding,
} from "../stylesheets/Home.module.sass";
import Skills from "../components/Section/Skills";
import Footer from "../components/Footer/Footer";
import BlogShowcase from "../components/Section/BlogShowcase";
import getMeta from "../components/Util/MetaGenerator";
import { getAllPosts } from "../lib/api";
import Heading from "../components/Heading";
import Section from "../components/Util/Section";

const content = require("../data/content.json");

export default function Home({ allPosts }) {
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
      <Heading id={content.aboutMeReference} text={content.aboutMeTitle} />
      <AboutMe />
      <Heading id={content.projectsReference} text={content.projectsTitle} />
      <Projects />
      <Heading id={content.skillsReference} text={content.skillsTitle} />
      <Skills />
      <Heading
        id={content.latestBlogPostsReference}
        text={content.latestBlogPostsTitle}
      />
      <BlogShowcase allPosts={allPosts} />

      <Section>
        <div
          id={content.contactReference}
          className={`${footerBackground} ${footerPadding}`}
        >
          <Container noPadding>
            <Footer />
          </Container>
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
