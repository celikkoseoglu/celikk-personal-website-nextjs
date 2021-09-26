import BlogItem from "../../components/Blog/BlogItem";
import Row from "../../components/Util/Row";
import {
  fontColorTransition,
  blogDark,
  blogItemMargin,
  blogNavbarMargin,
  blogStyle,
  blogTitleFont,
  blogSubtitleFont,
  circularImage,
  footerStyle,
  noMargin,
  profilePicture,
  verticalCenter,
} from "../../stylesheets/Blog.module.sass";
import BlogFooter from "../../components/Footer/BlogFooter";
import HorizontalRuler from "../../components/Util/HorizontalRuler";
import BlogNavbar from "../../components/Navbar/BlogNavbar";
import GrowingCircleAnimation from "../../components/Animations/GrowingCircleAnimation";
import { useState } from "react";
import { getInitialTheme } from "../../utils/FileManager.utils";
import NoSSR from "react-no-ssr";
import { getMeta } from "../../components/Util/MetaGenerator";

const blog = require("../../data/blog.json");
const footer = require("../../data/footer.json");
const blogNavbar = require("../../data/blogNavbar.json");

export default function Home() {
  const [isDark, setIsDark] = useState(getInitialTheme());

  const meta = getMeta(
    blog.pageTitle,
    blog.pageDescription,
    "/images/meta/blog.png",
    blog.metaImageAlt
  );

  const noSSRContent = (
    <div>
      {meta}
      <div className={blogStyle}>
        <BlogNavbar
          headerText={blogNavbar.blogBranding}
          brandingLink={blogNavbar.homeLink}
          className={blogNavbarMargin}
          isDark={false}
          setIsDark={setIsDark}
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

        {blog.blogItems.map((blogItem) => (
          <BlogItem
            className={blogItemMargin}
            title={blogItem.title}
            date={blogItem.date}
            minutes={blogItem.minutes}
            subtitle={blogItem.subtitle}
            blogPost={blogItem.blogPost}
            isDark={false}
            key={blogItem.title}
          />
        ))}

        <HorizontalRuler isDark={false} />
      </div>
      <div className={footerStyle}>
        <BlogFooter content={footer} isDark={false} />
      </div>
    </div>
  );

  const content = (
    <div>
      {meta}
      <GrowingCircleAnimation isDark={isDark} />
      <div className={blogStyle}>
        <BlogNavbar
          headerText={blogNavbar.blogBranding}
          brandingLink={blogNavbar.homeLink}
          className={blogNavbarMargin}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Row className={`${blogItemMargin} ${verticalCenter}`}>
          <div>
            <img
              className={`${circularImage} ${profilePicture}`}
              src="/images/blog/PP.jpg"
              alt={blog.imageAlt}
            />
          </div>
          <div className={`${isDark && blogDark}`}>
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

        {blog.blogItems.map((blogItem) => (
          <BlogItem
            className={blogItemMargin}
            title={blogItem.title}
            date={blogItem.date}
            minutes={blogItem.minutes}
            subtitle={blogItem.subtitle}
            blogPost={blogItem.blogPost}
            isDark={isDark}
            key={blogItem.title}
          />
        ))}

        <HorizontalRuler isDark={isDark} />
      </div>
      <div className={footerStyle}>
        <BlogFooter content={footer} isDark={isDark} />
      </div>
    </div>
  );

  return <NoSSR onSSR={noSSRContent}>{content}</NoSSR>;
}
