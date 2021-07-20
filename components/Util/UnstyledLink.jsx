import React from "react";
import PropTypes from "prop-types";
import { noDecoration } from "../../stylesheets/components/Util/UnstyledLink.module.sass";

const handler = (href) => Router.push(href);

const Link = ({className, children, href, ...rest}={}) => (
    <a onClick={() => handler(href)} className={className} {...rest} >{children}</a>
);

const UnstyledLink = ({ className, to, children }) => (
  <Link className={`${className} ${noDecoration}`} href={to}>
    {children}
  </Link>
);

UnstyledLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

UnstyledLink.defaultProps = {
  className: null,
  children: null,
};

export default UnstyledLink;
