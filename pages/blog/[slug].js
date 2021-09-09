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
import Head from "next/head";
import metaDecorator from "../../data/metaDecorator.json";

export default function Post({ post }) {
  const [isDark, setIsDark] = useState(getInitialTheme());

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <p>404</p>;
  }

  const meta = (
    <Head>
      <title>{post.title}</title>
      <meta property="og:title" content={post.title} />
      <meta name="description" content={post.excerpt} />
      <meta property="og:description" content={post.excerpt} />
      <meta
        property="og:image"
        content={post.cover.image}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={post.cover.alt} />
      <meta name="twitter:site" content={metaDecorator.twitterUsername} />
    </Head>
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

            <BlogPostMarkdown content={post.content} isDark={false} />

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

            <BlogPostMarkdown content={post.content} isDark={isDark} />

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
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "excerpt",
    "cover",
    "author",
    "content",
    "slug",
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
