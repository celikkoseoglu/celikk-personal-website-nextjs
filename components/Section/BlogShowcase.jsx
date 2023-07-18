import Section from "../Util/Section";
import {
  blogPostCardsRow,
  blogShowcaseCard,
  blogShowcaseContainer
} from "../../stylesheets/components/Section/BlogShowcase.module.sass";
import Container from "../Util/Container";
import Row from "../Util/Row";
import {
  NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE,
  retrieveLatestBlogPosts
} from "../../utils/LatestBlogsFetcher";
import BlogShowcaseCard from "../BlogShowcase/BlogShowcaseCard";
import BlogShowcaseButton from "../BlogShowcase/BlogShowcaseButton";
import { BLOG_LINK } from "../../utils/Constants.utils";

const blogShowcase = require("../../data/blogShowcase.json");

const BlogShowcase = ({ allPosts }) => (
  <Section>
    <Container className={blogShowcaseContainer}>
      <Row className={blogPostCardsRow}>
        {retrieveLatestBlogPosts(allPosts).map((blogItem, index) => (
          <BlogShowcaseCard
            timestamp={blogItem.data.date}
            minutes={blogItem.data.readTime}
            blogPost={blogItem.slug}
            title={blogItem.data.title.post}
            subtitle={blogItem.data.description}
            className={
              index >= NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE
                ? blogShowcaseCard
                : null
            }
            key={blogItem.data.title.post}
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

export default BlogShowcase;
