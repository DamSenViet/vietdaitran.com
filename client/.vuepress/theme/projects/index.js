import acelPrecision from "./../../assets/media/projects/staged/acelprecision.com.png";
import hackUci from "./../../assets/media/projects/staged/hack-uci-alt.png";
import thomasDuong from "./../../assets/media/projects/staged/thomasduong.com.png";
import designAtUci from "./../../assets/media/projects/staged/design-at-uci.png";
import reactAcnlPatternTool from "./../../assets/media/projects/staged/react-acnl-pattern-tool.png";
import lahacks from "./../../assets/media/projects/staged/lahacks.png";
import lahacksImproved from "./../../assets/media/projects/staged/lahacks-improved.png";
import reactPokedex from "./../../assets/media/projects/staged/react-pokedex-alt.png";
// kle-py
import acpatterns from "./../../assets/media/projects/staged/acpatterns.com.png";
import acpatternsjs from "./../../assets/media/projects/staged/acpatterns-js.png";
// keybits-js

export default [
  {
    name: "acelprecision.com",
    img: acelPrecision,
    link: "/acelprecision.com/",
    tags: ["development", "design"]
  },
  {
    name: "hack-uci",
    img: hackUci,
    link: "/hack-uci/",
    tags: ["development", "design"]
  },
  {
    name: "thomasduong.com",
    img: thomasDuong,
    link: "/thomasduong.com/",
    tags: ["development", "design"]
  },
  {
    name: "design-at-uci",
    img: designAtUci,
    link: "/design-at-uci/",
    tags: ["design"],
  },
  {
    name: "react-acnl-pattern-tool",
    img: reactAcnlPatternTool,
    link: "/react-acnl-pattern-tool/",
    tags: ["development"],
  },
  {
    name: "lahacks",
    img: lahacks,
    link: "/lahacks/",
    tags: ["development"]
  },
  {
    name: "lahacks-improved",
    img: lahacksImproved,
    link: "/lahacks-improved/",
    tags: ["development", "design"]
  },
  {
    name: "react-pokedex",
    img: reactPokedex,
    link: "/react-pokedex/",
    tags: ["development"],
  },
  {
    name: "acpatterns.com",
    img: acpatterns,
    link: "/acpatterns.com/",
    tags: ["development", "design"],
  },
  {
    name: "acpatterns-js",
    img: acpatternsjs,
    link: "/acpatterns-js/",
    tags: ["development"],
  }].reverse().map((e) => {
    e.link = "/projects" + e.link;
    return e;
  });