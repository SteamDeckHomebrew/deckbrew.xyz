import React from "react";
import { FaDiscord, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

interface SidebarInterface {
  toggle: () => void;
  isOpen: boolean;
}

export const Sidebar = ({ isOpen, toggle }: SidebarInterface) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarA href="/github" target="_blank">
            GitHub
          </SidebarA>
          <SidebarA href="/wiki" target="_blank">
            Wiki
          </SidebarA>
          <SidebarDownload
            href="/download"
            target="_blank"
            download="decky_installer.desktop"
          >
            Download
          </SidebarDownload>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

interface SidebarProps {
  readonly isOpen: boolean;
}

const SidebarContainer = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--dark);
  display: grid;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.15s ease-in-out;
  opacity: ${(props) => (props.isOpen ? "100%" : "0")};
`;

const CloseIcon = styled(FaTimes)`
  color: var(--light);
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--light);
  background-color: var(--dark);
  cursor: pointer;

  &:hover {
    color: var(--dark);
    background-color: var(--light);
    transition: 0.1s ease-in-out;
  }
`;

const SidebarDownload = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--light);
  background-color: var(--accent);
  cursor: pointer;

  &:hover {
    color: var(--dark);
    background-color: var(--light);
    transition: 0.1s ease-in-out;
  }
`;
