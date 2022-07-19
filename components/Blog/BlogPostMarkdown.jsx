import React from "react";
import PropTypes from "prop-types";
import MediaCarousel from "./MediaCarousel";
import { blogPostStyle } from "../../stylesheets/components/Blog/BlogPostMarkdown.module.sass";
import { MDXRemote } from "next-mdx-remote";
import Code from "./Code";

const components = {
  pre: (props) => <Code {...props} />,
  MediaCarousel,
};

const BlogPostMarkdown = ({ content }) => (
  <div className={blogPostStyle}>
    <MDXRemote {...content} components={components} />
  </div>
);

BlogPostMarkdown.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BlogPostMarkdown;
