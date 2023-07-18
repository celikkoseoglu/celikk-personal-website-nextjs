import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";
import {
  socialMediaButtonBackground,
  footerStyle,
  title,
  socialMediaBar
} from "../../stylesheets/components/Footer/BlogFooter.module.sass";
import useDarkMode from "use-dark-mode";
import NoSSR from "react-no-ssr";

const footer = require("../../data/footer.json");

const BlogFooter = () => {
  const darkMode = useDarkMode();

  return (
    <footer className={footerStyle}>
      <div className={title}>
        <span>{footer.title}</span>
        <NoSSR>
          <Signature isDark={darkMode.value} />
        </NoSSR>
      </div>
      <div className={socialMediaBar}>
        <SocialMediaBar
          socialMediaLinks={footer.socialMediaLinks}
          buttonBackground={socialMediaButtonBackground}
        />
      </div>
    </footer>
  );
};

export default BlogFooter;
