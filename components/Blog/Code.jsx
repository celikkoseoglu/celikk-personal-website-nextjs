import React, { useState } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClipboard, FaRegCopy } from "react-icons/fa";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";
import {
  copyButton,
  copyButtonDark,
  parentDiv,
} from "../../stylesheets/components/Blog/Code.module.sass";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sass", sass);

const Code = (props) => {
  const { className, children } = props.children.props;

  const language =
    className.match(/(?<=language-)(\w.*?)\b/) != null
      ? className.match(/(?<=language-)(\w.*?)\b/)[0]
      : "javascript";

  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={parentDiv}>
      <CopyToClipboard
        onCopy={() => setIsCopied(true)}
        className={`${copyButton} ${copyButtonDark}`}
        text={children}
      >
        <button type="button" aria-label="Copy to Clipboard Button">
          {isCopied ? <FaRegClipboard /> : <FaRegCopy />}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter language={language} style={atomDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

Code.propTypes = {
  props: PropTypes.shape({
    children: PropTypes.shape({
      props: PropTypes.shape({
        children: PropTypes.object.isRequired,
        className: PropTypes.string.isRequired,
      }),
    }),
  }),
};

Code.defaultProps = {
  language: "javascript",
};

export default Code;
