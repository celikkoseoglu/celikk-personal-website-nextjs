import React from "react";
import CustomButton from "../components/CustomButton";
import {
  notFoundStyle,
  customButton,
  noMargin,
} from "../stylesheets/NotFound.module.sass";
import { getMeta } from "../components/Util/MetaGenerator";

const notFound = require("../data/notFound.json");

const NotFound = () => {
  const meta = getMeta(
    notFound.pageTitle,
    notFound.pageDescription,
    "/images/meta/notFound.png",
    notFound.metaImageAlt
  );

  return (
    <div className={notFoundStyle}>
      {meta}
      <div>
        <h1 className={noMargin}>{notFound.notFoundTitle}</h1>
        <p>{notFound.notFoundMessage}</p>
        <CustomButton
          className={customButton}
          text={notFound.leftButtonText}
          to={notFound.leftButtonLink}
          href={notFound.leftButtonLink}
        />
        <CustomButton
          className={customButton}
          text={notFound.rightButtonText}
          to={notFound.rightButtonLink}
          href={notFound.rightButtonLink}
        />
      </div>
    </div>
  );
};

export default NotFound;
