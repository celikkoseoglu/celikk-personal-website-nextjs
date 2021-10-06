import React from "react";
import PropTypes from "prop-types";
import Section from "../Util/Section";
import {
  blogShowcaseContainer,
  blogPostCardsRow,
  blogShowcaseCard,
} from "../../stylesheets/components/Section/BlogShowcase.module.sass";
import Heading from "../Heading";
import Container from "../Util/Container";
import Row from "../Util/Row";
import {
  NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE,
  retrieveLatestBlogPosts,
} from "../../utils/LatestBlogsFetcher";
import BlogShowcaseCard from "../BlogShowcase/BlogShowcaseCard";
import BlogShowcaseButton from "../BlogShowcase/BlogShowcaseButton";
import { BLOG_LINK } from "../../utils/Constants.utils";

const blogShowcase = require("../../data/blogShowcase.json");

const BlogShowcase = ({ id, allPosts }) => (
  <Section id={id}>
    <Heading marginBottom text={blogShowcase.latestBlogPostsTitle} />
    <Container className={blogShowcaseContainer}>
      <Row className={blogPostCardsRow}>
        {retrieveLatestBlogPosts(allPosts).map((blogItem, index) => (
          <BlogShowcaseCard
            timestamp={blogItem.date}
            minutes={blogItem.readTime}
            blogPost={blogItem.slug}
            title={blogItem.title.post}
            subtitle={blogItem.description}
            className={
              index >= NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE
                ? blogShowcaseCard
                : null
            }
            key={blogItem.title.post}
          />
        ))}
      </Row>
      <BlogShowcaseButton
        link={BLOG_LINK}
        text={blogShowcase.viewAllBlogPostsButton}
      />
    </Container>
  </Section>
);

BlogShowcase.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BlogShowcase;
