import React from "react";
import styled from "styled-components";

import Logo from "../../images/icon.png";
import { CgExternal } from "react-icons/cg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterBigColumn>
          <a
            href="https://deckbrew.xyz/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FooterLogo src={Logo} />
            <FooterCompany>Steam Deck Homebrew</FooterCompany>
          </a>
        </FooterBigColumn>
        <FooterSpacerColumn />
        <FooterColumn>
          <FooterColumnHeader>Repositories</FooterColumnHeader>
          <FooterLink
            href="https://github.com/SteamDeckHomebrew/decky-frontend-lib"
            target="_blank"
          >
            Decky Frontend Lib
          </FooterLink>
          <FooterLink
            href="https://github.com/SteamDeckHomebrew/decky-loader"
            target="_blank"
          >
            Decky Loader
          </FooterLink>
          <FooterLink
            href="https://github.com/SteamDeckHomebrew/decky-plugin-database"
            target="_blank"
          >
            Decky Plugin Database
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>Social Media</FooterColumnHeader>
          <FooterLink href="https://discord.gg/ZU74G2NJzk">Discord</FooterLink>
          <FooterLink href="https://github.com/SteamDeckHomebrew">
            GitHub
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>Resources</FooterColumnHeader>
          <FooterLink href="https://github.com/SteamDeckHomebrew/decky-plugin-template">
            Decky Plugin Template
          </FooterLink>
          <FooterLink href="https://wiki.deckbrew.xyz/">Wiki</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>Policies</FooterColumnHeader>
          <FooterLink href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">
            Code of Conduct
          </FooterLink>
        </FooterColumn>
      </FooterWrapper>
      <FooterCopyright>
        © 2022 Steam Deck Homebrew. All rights reserved. All trademarks property
        of their respective owners in the U.S. and other countries. Steam Deck
        Homebrew is not affiliated with Valve Corporation. Steam, the Steam
        logo, Steam Deck, and the Steam Deck logo are trademarks and/or
        registered trademarks of Valve Corporation in the U.S. and/or other
        countries.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: #000;
  padding: 40px 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 50vh 0 50vh #000;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  display: grid;
  gap: 0 20px;
  border-bottom: 1px solid var(--accent);
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const FooterBigColumn = styled.div`
  grid-column: span 3;
  grid-row-end: span 2;
  margin-bottom: 40px;
`;

const FooterSpacerColumn = styled.div`
  grid-column: span 1;
  grid-row-end: span 2;
`;

const FooterColumn = styled.div`
  grid-column: span 2;
  margin-bottom: 40px;
`;

const FooterLogo = styled.img`
  height: 52px;
  margin-right: 10px;
`;

const FooterCompany = styled.span`
  color: #fff;
  font-size: 1.25rem;
  font-family: "Montserrat", "Roboto", Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-decoration: none;
`;

const FooterCopyright = styled.span`
  color: #999;
  text-align: center;
  font-size: 12px;
  width: 100%;
  max-width: 1180px;
  padding-top: 30px;
  font-style: italic;
`;

const FooterColumnHeader = styled.span`
  color: var(--accent);
  font-family: "Montserrat", "Roboto", Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 8px;
  display: block;
`;
