import { getAllPosts, getPostBySlug } from "../../lib/api";
import HorizontalRuler from "../../components/Util/HorizontalRuler";
import BlogFooter from "../../components/Footer/BlogFooter";
import BlogNavbar from "../../components/Navbar/BlogNavbar";
import GrowingCircleAnimation from "../../components/Animations/GrowingCircleAnimation";
import {
  blogContainer,
  blogPostNavbarMargin,
  footerStyle
} from "../../stylesheets/BlogPost.module.sass";
import BlogPostMarkdown from "../../components/Blog/BlogPostMarkdown";
const blogNavbar = require("../../data/blogNavbar.json");
const footer = require("../../data/footer.json");
import NoSSR from "react-no-ssr";
import getMeta from "../../components/Util/MetaGenerator";
import { serialize } from "next-mdx-remote/serialize";

export default function Post({ post }) {
  const meta = getMeta(
    post.data.title.page,
    post.data.description,
    post.data.cover.image,
    post.data.cover.alt
  );

  const content = (
    <>
      {meta}
      <>
        <NoSSR>
          <GrowingCircleAnimation />
        </NoSSR>

        <div className={blogContainer}>
          <BlogNavbar
            headerText={blogNavbar.blogBranding}
            headerLink={blogNavbar.blogLink}
            brandingLink={blogNavbar.homeLink}
            className={blogPostNavbarMargin}
          />

          <BlogPostMarkdown content={post.content} />

          <HorizontalRuler />
        </div>
        <div className={footerStyle}>
          <BlogFooter content={footer} />
        </div>
      </>
    </>
  );

  return content;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, true);

  const content = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
