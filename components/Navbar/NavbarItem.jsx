import PropTypes from "prop-types";
import { Link } from "react-scroll";
import UnstyledLink from "../Util/UnstyledLink";
import { navLink } from "../../stylesheets/components/Navbar/NavbarItem.module.sass";
import { SCROLL_DURATION, SCROLL_OFFSET } from "../../utils/Constants.utils";

const NavbarItem = ({ children, reference, href, className }) => {
  if (reference != null) {
    return (
      <Link
        className={`${className} page-scroll ${navLink}`}
        to={reference}
        smooth
        offset={SCROLL_OFFSET}
        duration={SCROLL_DURATION}
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
  className: PropTypes.string
};

NavbarItem.defaultProps = {
  reference: PropTypes.null,
  href: PropTypes.null,
  className: PropTypes.null
};

export default NavbarItem;
