import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import {
  brand,
  brandContainer,
  customNavbar,
  mobileNavbar,
  mobileNavbarLinksCollapsed,
  mobileNavbarLinksExpanded,
  navbarContainer,
  navbarLinks,
  navbarToggle,
  topNavCollapse,
  topNavExpand,
  whiteLink,
} from "../../stylesheets/components/Navbar/NavigationBar.module.sass";
import Container from "../Util/Container";
import NavbarToggle from "./NavbarToggle";
import { debounce, throttle } from "../../utils/Limitors";
import BrandingLogo from "../Animations/BrandingLogo";

const content = require("../../data/navbar.json");

const NavigationBar = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(true);
  const [transparency, setTransparency] = useState(0.0);

  function handleScroll() {
    if (window.scrollY > 50) {
      setNavbarExpanded(false);
    } else if (window.scrollY < 50) {
      setNavbarExpanded(true);
    }

    if (window.scrollY > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.scrollY / 500.0);
    }

    setMobileNavbarCollapsed(true);
  }

  useEffect(() => {
    /*  Safari does not call the scroll listener function if the user navigates back to the page.
        For example, a user can scroll all the way to the bottom of the page, click one of the links
        in the footer, then click the back button on the browser window. The scroll position will be
        remembered but the navigation bar style won't be updated to reflect the new state
        (blurred background). This is why we have to call the handleScroll function at least once
        when the component is mounted. */
    handleScroll();
    window.addEventListener("scroll", throttle(debounce(handleScroll)));
    return () =>
      window.removeEventListener("scroll", throttle(debounce(handleScroll)));
  }, []);

  return (
    <nav
      style={
        mobileNavbarCollapsed
          ? {
              backgroundColor: `rgba(27, 27, 27, ${transparency * 0.85})`,
              backdropFilter: `blur(${transparency * 5}px)`,
            }
          : {
              backgroundColor: `rgba(27, 27, 27, 0.85)`,
              backdropFilter: `blur(${transparency * 5}px)`,
            }
      }
      className={`${customNavbar} ${
        navbarExpanded ? topNavExpand : topNavCollapse
      }`}
    >
      <Container className={navbarContainer}>
        <div className={mobileNavbar}>
          <NavbarItem
            className={brandContainer}
            reference={content.landingReference}
          >
            <BrandingLogo
              className={brand}
              fillColor={"#F0F0F0"}
              strokeColor={"#F0F0F0"}
            />
          </NavbarItem>
          <NavbarToggle
            onClickMethod={setMobileNavbarCollapsed}
            collapsed={mobileNavbarCollapsed}
            className={navbarToggle}
          />
        </div>
        <div
          className={`${navbarLinks} ${
            mobileNavbarCollapsed
              ? mobileNavbarLinksCollapsed
              : mobileNavbarLinksExpanded
          }`}
        >
          {content.items.map((item) => (
            <NavbarItem
              reference={item.reference}
              href={item.href}
              className={whiteLink}
              key={item.title}
            >
              {item.title}
            </NavbarItem>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default NavigationBar;
