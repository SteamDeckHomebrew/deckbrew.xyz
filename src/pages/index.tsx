import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./style.css";
import { HelmetComponent, Navbar } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <HelmetComponent
        title="Decky Loader"
        description="Decky Loader is an open-source project that brings plugin support to the Steam Deck."
      />
      <Navbar toggle={toggle} />
    </>
  );
};

export default IndexPage;
