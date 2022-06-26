import { useRouter } from "next/router";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import HorizontalRuler from "../../components/Util/HorizontalRuler";
import BlogFooter from "../../components/Footer/BlogFooter";
import BlogNavbar from "../../components/Navbar/BlogNavbar";
import GrowingCircleAnimation from "../../components/Animations/GrowingCircleAnimation";
import {
  blogContainer,
  blogPostDark,
  blogPostBody,
  blogPostNavbarMargin,
  footerStyle,
  width,
} from "../../stylesheets/BlogPost.module.sass";
import { useState } from "react";
import { getInitialTheme } from "../../utils/FileManager.utils";
import BlogPostMarkdown from "../../components/Blog/BlogPostMarkdown";
const blogNavbar = require("../../data/blogNavbar.json");
const footer = require("../../data/footer.json");
import NoSSR from "react-no-ssr";
import getMeta from "../../components/Util/MetaGenerator";

export default function Post({ post }) {
  const [isDark, setIsDark] = useState(getInitialTheme());

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <p>404</p>;
  }

  const meta = getMeta(
    post.data.title.page,
    post.data.description,
    post.data.cover.image,
    post.data.cover.alt
  );

  const noSSRContent = (
    <>
      {meta}
      <div className={blogPostBody}>
        <div className={width}>
          <div className={blogContainer}>
            <BlogNavbar
              headerText={blogNavbar.blogBranding}
              headerLink={blogNavbar.blogLink}
              brandingLink={blogNavbar.homeLink}
              className={blogPostNavbarMargin}
              isDark={false}
              setIsDark={setIsDark}
            />

            <BlogPostMarkdown
              fileName={post.slug}
              content={post.content}
              isDark={false}
            />

            <HorizontalRuler isDark={false} />
          </div>
          <div className={footerStyle}>
            <BlogFooter content={footer} isDark={false} />
          </div>
        </div>
      </div>
    </>
  );

  const content = (
    <>
      {meta}
      <div className={`${isDark && blogPostDark} ${blogPostBody}`}>
        <GrowingCircleAnimation isDark={isDark} />
        <div className={width}>
          <div className={`${blogContainer}`}>
            <BlogNavbar
              headerText={blogNavbar.blogBranding}
              headerLink={blogNavbar.blogLink}
              brandingLink={blogNavbar.homeLink}
              className={blogPostNavbarMargin}
              isDark={isDark}
              setIsDark={setIsDark}
            />

            <BlogPostMarkdown
              fileName={post.slug}
              content={post.content}
              isDark={isDark}
            />

            <HorizontalRuler isDark={isDark} />
          </div>
          <div className={footerStyle}>
            <BlogFooter content={footer} isDark={isDark} />
          </div>
        </div>
      </div>
    </>
  );

  return <NoSSR onSSR={noSSRContent}>{content}</NoSSR>;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  const content = post.content || "";

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
