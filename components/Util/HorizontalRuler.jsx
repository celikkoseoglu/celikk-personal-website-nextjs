import PropTypes from "prop-types";
import {
  thick,
  main
} from "../../stylesheets/components/Util/HorizontalRuler.module.sass";

const HorizontalRuler = ({ isThick, className }) => {
  return <hr className={`${className} ${main} ${isThick && thick}`} />;
};

HorizontalRuler.propTypes = {
  isThick: PropTypes.bool,
  className: PropTypes.string
};

HorizontalRuler.defaultProps = {
  isThick: false,
  className: null
};

export default HorizontalRuler;
