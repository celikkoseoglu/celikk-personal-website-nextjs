import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import UnstyledLink from "../Util/UnstyledLink";
import { navLink } from "../../stylesheets/components/Navbar/NavbarItem.module.sass";

const NavbarItem = ({ children, reference, href, className }) => {
  if (reference != null) {
    return (
      <Link
        className={`${className} page-scroll ${navLink}`}
        to={reference}
        smooth
        offset={-50}
        duration={500}
        ignoreCancelEvents={false}
        href="/"
      >
        {children}
      </Link>
    );
  }
  return (
    <UnstyledLink className={`${className} ${navLink}`} to={href}>
      {children}
    </UnstyledLink>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  reference: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

NavbarItem.defaultProps = {
  reference: PropTypes.null,
  href: PropTypes.null,
  className: PropTypes.null,
};

export default NavbarItem;
