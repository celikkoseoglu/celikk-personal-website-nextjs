const BLACK = "#000";
const MIDNIGHT_BLACK = "#111";
const SPACE_BLACK = "#222";
const SPACE_GREY = "#2D2D2D";
const OXIDISED_SILVER = "#444";
const DARK_GREY = "#757575";
const GREY = "#A4A4A4";
const LIGHT_GREY = "#AFAFAF";
const SMOKE_GREY = "#C9C9C9";
const PALE_GREY = "#F0F0F0";
const OFF_WHITE = "#FCFCFC";
const WHITE = "#FFF";
const DARK_BLUE = "#003C85";
const BLUE = "#5C8AFE";
const LIGHT_BLUE = "#88A7D1";
const SKY_BLUE = "#A2C1EB";
const ALPHA_WHITE = "#FFFFFF33";

const setColorScheme = () => {
  // Change these if you use something different in your hook.
  const storageKey = "darkMode";
  const classNameDark = "dark-mode";
  const classNameLight = "light-mode";
  const preferDarkQuery = "(prefers-color-scheme: dark)";

  function setClassOnDocumentBody(darkMode) {
    // following 2 lines might be required for useDarkMode hook to work properly
    // if not, then remove the following 2 lines.
    document.body.classList.add(darkMode ? classNameDark : classNameLight);
    document.body.classList.remove(darkMode ? classNameLight : classNameDark);

    const ds = document.documentElement.style;

    if (darkMode) {
      ds.setProperty("--primary-text-color", WHITE);
      // ds.setProperty("--secondary-text-color", "#FF0000");
      ds.setProperty("--primary-link-color", LIGHT_BLUE);
      ds.setProperty("--secondary-link-color", SKY_BLUE);
      ds.setProperty("--link-shadow-color", DARK_BLUE);
      ds.setProperty("--text-shadow-color", DARK_GREY);
      ds.setProperty("--background-color", MIDNIGHT_BLACK);
    } else {
      ds.setProperty("--primary-text-color", MIDNIGHT_BLACK);
      // ds.setProperty("--secondary-text-color", "#FF0000");
      ds.setProperty("--primary-link-color", DARK_BLUE);
      ds.setProperty("--secondary-link-color", DARK_BLUE);
      ds.setProperty("--link-shadow-color", LIGHT_BLUE);
      ds.setProperty("--text-shadow-color", SMOKE_GREY);
      ds.setProperty("--background-color", WHITE);
    }
  }

  let mql = window.matchMedia(preferDarkQuery);
  let supportsColorSchemeQuery = mql.media === preferDarkQuery;
  let localStorageTheme = localStorage.getItem(storageKey);

  if (localStorageTheme !== null) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  if (localStorageTheme !== null) {
    setClassOnDocumentBody(localStorageTheme);
  } else if (supportsColorSchemeQuery) {
    setClassOnDocumentBody(mql.matches);
    localStorage.setItem(storageKey, mql.matches);
  }
};

setColorScheme();
window.addEventListener("darkModeToggle", setColorScheme);
