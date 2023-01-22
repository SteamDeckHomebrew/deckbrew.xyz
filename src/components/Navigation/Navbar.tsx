import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { FaBars } from "react-icons/fa";
import Logo from "../../images/icon.png";

interface NavbarInterface {
  toggle: () => void;
}

export const Navbar = ({ toggle }: NavbarInterface) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <NavLogoImg src={Logo} alt="Decky Loader Logo" />
          <span style={{ fontFamily: "inherit" }}>Decky Loader</span>
        </NavLogo>
        <NavMobile onClick={toggle}>
          <FaBars />
        </NavMobile>
        <NavMenu>
          <NavA link={"/github"} newTab={true}>
            GitHub
          </NavA>
          <NavA link={"/wiki"} newTab={true}>
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
      href={"/download"}
      download="decky_installer.desktop"
    >
      <span className="nav-span">Download</span>
    </a>
  );
};

const Nav = styled.nav`
  background: var(--dark);
  position: fixed;
  height: var(--navbar-height);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: var(--page-width);
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.25rem;
  font-family: "Montserrat", "Roboto", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  min-width: 0;
`;

const NavLogoImg = styled.img`
  height: 52px;
  width: 52px;
  margin-right: 12px;
`;

const NavMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    margin-right: 24px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
