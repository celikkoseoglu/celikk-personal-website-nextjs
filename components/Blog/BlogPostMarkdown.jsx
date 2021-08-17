import React from "react";
import PropTypes from "prop-types";
import { compiler } from "markdown-to-jsx";
import MediaCarousel from "./MediaCarousel";
import {
  blogPostDarkStyle,
  blogPostStyle,
} from "../../stylesheets/components/Blog/BlogPostMarkdown.module.sass";
import Code from "./Code";

const BlogPostMarkdown = ({ isDark, content }) => {
  return (
    <div className={`${blogPostStyle} ${isDark && blogPostDarkStyle}`}>
      {compiler(content, {
        overrides: {
          MediaCarousel: {
            component: MediaCarousel,
            props: {
              isDark,
            },
          },
          Code: {
            component: Code,
            props: {
              isDark,
            },
          },
        },
      })}
    </div>
  );
};

BlogPostMarkdown.propTypes = {
  content: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  fileName: PropTypes.string,
};

BlogPostMarkdown.defaultProps = {
  isDark: false,
  fileName: null,
};

export default BlogPostMarkdown;
