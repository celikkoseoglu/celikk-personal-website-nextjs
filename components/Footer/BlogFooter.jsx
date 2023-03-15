import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";
import {
  socialMediaButtonBackground,
  socialMediaButtonBackgroundDark,
  footerStyle,
  title,
  darkTitle,
  socialMediaBar,
} from "../../stylesheets/components/Footer/BlogFooter.module.sass";
import useDarkMode from "use-dark-mode";

const footer = require("../../data/footer.json");

const BlogFooter = () => {
  const darkMode = useDarkMode(false);

  return (
    <footer className={footerStyle}>
      <div className={title}>
        <span className={darkMode.value ? darkTitle : null}>
          {footer.title}
        </span>
        <Signature isDark={darkMode.value} />
      </div>
      <div className={socialMediaBar}>
        <SocialMediaBar
          socialMediaLinks={footer.socialMediaLinks}
          buttonBackground={
            darkMode.value
              ? socialMediaButtonBackgroundDark
              : socialMediaButtonBackground
          }
        />
      </div>
    </footer>
  );
};

export default BlogFooter;
