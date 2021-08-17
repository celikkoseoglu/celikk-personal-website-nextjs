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

export default function Post({ post }) {
  const [isDark, setIsDark] = useState(getInitialTheme());

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <p>404</p>;
  }
  return (
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

          <BlogPostMarkdown content={post.content} isDark={isDark} />

          <HorizontalRuler isDark={isDark} />
        </div>
        <div className={footerStyle}>
          <BlogFooter content={footer} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

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
