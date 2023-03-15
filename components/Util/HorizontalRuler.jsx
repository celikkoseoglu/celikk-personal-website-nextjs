import PropTypes from "prop-types";
import {
  dark,
  thickDark,
  light,
  thickLight,
  main,
} from "../../stylesheets/components/Util/HorizontalRuler.module.sass";
import useDarkMode from "use-dark-mode";

const HorizontalRuler = ({ isThick, className }) => {
  const darkMode = useDarkMode(false);

  return (
    <hr
      className={`${className} ${main} ${
        // eslint-disable-next-line no-nested-ternary
        darkMode.value
          ? isThick
            ? thickDark
            : dark
          : isThick
          ? thickLight
          : light
      }`}
    />
  );
};

HorizontalRuler.propTypes = {
  isThick: PropTypes.bool,
  className: PropTypes.string,
};

HorizontalRuler.defaultProps = {
  isThick: false,
  className: null,
};

export default HorizontalRuler;
