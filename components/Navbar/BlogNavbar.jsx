import PropTypes from "prop-types";
import {
  noMargin,
  titleFont,
  title,
  navbarFlex,
  darkModeToggle,
  branding,
  blogLinkBranding,
  defaultCursor,
  pointerCursor,
} from "../../stylesheets/components/Navbar/BlogNavbar.module.sass";
import DarkModeToggle from "../DarkModeToggle";
import UnstyledLink from "../Util/UnstyledLink";
import BrandingLogo from "../Animations/BrandingLogo";
import Row from "../Util/Row";
import useDarkMode from "use-dark-mode";
import NoSSR from "react-no-ssr";

const BlogNavbar = ({ headerText, headerLink, brandingLink, className }) => {
  const darkMode = useDarkMode();

  const header = <h1 className={`${noMargin} ${titleFont}`}>{headerText}</h1>;

  const getTitleOrButton = (link) =>
    link ? (
      <UnstyledLink
        className={`${blogLinkBranding} ${pointerCursor}`}
        to={link}
      >
        {header}
      </UnstyledLink>
    ) : (
      <span className={`${defaultCursor} ${title}`}>{header}</span>
    );

  return (
    <div className={`${navbarFlex} ${className}`}>
      <Row>
        <UnstyledLink to={brandingLink}>
          <NoSSR>
            <BrandingLogo
              className={branding}
              fillColor={darkMode.value ? "#A2C1EB" : "#003C85"}
              strokeColor={darkMode.value ? "#A2C1EB" : "#003C85"}
            />
          </NoSSR>
        </UnstyledLink>

        {getTitleOrButton(headerLink)}
      </Row>
      <div className={darkModeToggle}>
        <NoSSR>
          <DarkModeToggle />
        </NoSSR>
      </div>
    </div>
  );
};

BlogNavbar.propTypes = {
  headerText: PropTypes.string.isRequired,
  headerLink: PropTypes.string,
  brandingLink: PropTypes.string.isRequired,
  className: PropTypes.string,
};

BlogNavbar.defaultProps = {
  headerLink: null,
  className: null,
};

export default BlogNavbar;
