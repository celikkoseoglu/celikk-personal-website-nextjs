import PropTypes from "prop-types";
import {
  title,
  titleRow,
  ruler,
  backgroundColor,
} from "../stylesheets/components/Heading.module.sass";

import HorizontalRuler from "./Util/HorizontalRuler";
import Row from "./Util/Row";
import Container from "./Util/Container";

const Heading = ({ id, text, className }) => (
  <div className={backgroundColor}>
    <Container>
      <Row className={titleRow}>
        <h2 id={id} className={`${title} ${className}`}>
          {text}
        </h2>
        <HorizontalRuler isThick className={ruler} />
      </Row>
    </Container>
  </div>
);

Heading.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  text: null,
  className: null,
};

export default Heading;
