import React from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoImg,
  NavMobile,
  NavMenu,
} from "./elements";

import Logo from "../../images/icon.png";

interface NavbarInterface {
  toggle: () => void;
}

const Navbar = ({ toggle }: NavbarInterface) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <NavLogoImg src={Logo} alt="Decky Loader Logo" />
          <span>Decky Loader</span>
        </NavLogo>
        <NavMobile onClick={toggle}>
          <FaBars />
        </NavMobile>
        <NavMenu>
          <NavA link={"https://github.com/SteamDeckHomebrew"} newTab={true}>
            GitHub
          </NavA>
          <NavA link={"https://deckbrew.xyz/"} newTab={true}>
            Wiki
          </NavA>
          <NavDownload />
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

type NavButtonProps = {
  link: string;
  newTab?: boolean;
  children?: React.ReactNode;
};

const NavA: React.FC<NavButtonProps> = ({ link, newTab, children }) => {
  return (
    <a className="nav-link" href={link} target={newTab ? "_blank" : "_self"}>
      <span className="nav-span">{children}</span>
    </a>
  );
};

const NavDownload = () => {
  return (
    <a
      className="nav-link"
      style={{ backgroundColor: "var(--accent)" }}
      href={
        "https://github.com/SteamDeckHomebrew/decky-installer/releases/latest/download/decky_installer.desktop"
      }
      download
    >
      <span className="nav-span">Download</span>
    </a>
  );
};
