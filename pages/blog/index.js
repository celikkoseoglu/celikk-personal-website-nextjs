import BlogItem from "../../components/Blog/BlogItem";
import Row from "../../components/Util/Row";
import {
  blogItemMargin,
  blogNavbarMargin,
  blogStyle,
  blogSubtitleFont,
  blogTitleFont,
  circularImage,
  fontColorTransition,
  footerStyle,
  noMargin,
  profilePicture,
  verticalCenter,
} from "../../stylesheets/Blog.module.sass";
import BlogFooter from "../../components/Footer/BlogFooter";
import HorizontalRuler from "../../components/Util/HorizontalRuler";
import BlogNavbar from "../../components/Navbar/BlogNavbar";
import GrowingCircleAnimation from "../../components/Animations/GrowingCircleAnimation";
import getMeta from "../../components/Util/MetaGenerator";
import { getAllPosts } from "../../lib/api";

const blog = require("../../data/blog.json");
const footer = require("../../data/footer.json");
const blogNavbar = require("../../data/blogNavbar.json");

const formatDate = (date) => {
  const dateObject = new Date(date);
  const curr_date = dateObject.getDate();
  const curr_month = dateObject.getMonth() + 1; //Months are zero based
  const curr_year = dateObject.getFullYear();
  return curr_date + "." + curr_month + "." + curr_year;
};

export default function Blog({ allPosts }) {
  const meta = getMeta(
    blog.title.page,
    blog.pageDescription,
    "/images/meta/blog.png",
    blog.metaImageAlt
  );

  const getBlogItem = (post) => (
    <BlogItem
      className={blogItemMargin}
      title={post.data.title.post}
      date={formatDate(post.data.date)}
      minutes={post.data.readTime}
      subtitle={post.data.description}
      blogPost={post.slug}
      key={post.data.title.post}
    />
  );

  return (
    <div>
      {meta}
      <GrowingCircleAnimation />
      <div className={blogStyle}>
        <BlogNavbar
          headerText={blogNavbar.blogBranding}
          brandingLink={blogNavbar.homeLink}
          className={blogNavbarMargin}
        />
        <Row className={`${blogItemMargin} ${verticalCenter}`}>
          <div>
            <img
              className={`${circularImage} ${profilePicture}`}
              src="/images/blog/PP.jpg"
              alt={blog.imageAlt}
            />
          </div>
          <div>
            <p
              className={`${blogTitleFont} ${noMargin} ${fontColorTransition}`}
            >
              {blog.title}
            </p>
            <p
              className={`${blogSubtitleFont} ${noMargin} ${fontColorTransition}`}
            >
              {blog.subtitle}
            </p>
          </div>
        </Row>

        {allPosts.map((post) => getBlogItem(post))}

        <HorizontalRuler />
      </div>
      <div className={footerStyle}>
        <BlogFooter content={footer} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
