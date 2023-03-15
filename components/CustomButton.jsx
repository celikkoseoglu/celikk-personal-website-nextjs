import PropTypes from "prop-types";
import {
  customButton,
  customButtonDark,
  textCenter,
} from "../stylesheets/components/CustomButton.module.sass";
import UnstyledLink from "./Util/UnstyledLink";
import useDarkMode from "use-dark-mode";

const CustomButton = ({ text, to, href, className }) => {
  const darkMode = useDarkMode(false);

  return (
    <UnstyledLink
      to={to}
      href={href}
      className={`${textCenter} ${customButton} ${className} ${
        darkMode.value ? customButtonDark : null
      }`}
    >
      {text}
    </UnstyledLink>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  to: null,
  href: null,
  className: null,
};

export default CustomButton;
