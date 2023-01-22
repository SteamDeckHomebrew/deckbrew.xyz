import * as React from "react";
import styled from "styled-components";
import type { PageProps } from "gatsby";
import "./style.css";
import {
  Content,
  GridRow,
  HelmetComponent,
  Hero,
  Navbar,
  Section,
  Feature,
  Button,
  Sidebar,
} from "../components";
import Footer from "../components/Navigation/Footer";

import {
  FaBug,
  FaCog,
  FaInfoCircle,
  FaSteam,
  FaPlug,
  FaStore,
  FaDownload,
} from "react-icons/fa";
import { CgColorBucket } from "react-icons/cg";
import { SiRetroarch } from "react-icons/si";

import QAM from "../images/qam.svg";
import DeckyOnDeck from "../images/decky-on-deck.png";

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
      <Sidebar isOpen={navOpen} toggle={toggle} />
      <Content>
        <Hero />
        <Section dark={true}>
          <h2>Lots in store</h2>
          <GridRow>
            <Feature
              icon={<CgColorBucket />}
              header="Customization"
              description={
                <>
                  <WhiteText>Audio Loader</WhiteText>,{" "}
                  <WhiteText>Animation Changer</WhiteText>, and{" "}
                  <WhiteText>CSS Loader</WhiteText> help you customize your
                  Steam Deck with new visuals and sounds, such as those from
                  consoles.
                </>
              }
            />
            <Feature
              icon={<FaCog />}
              header="Game Settings"
              description={
                <>
                  <WhiteText>ProtonDB Badges</WhiteText> can help you find what
                  games work well on Linux and{" "}
                  <WhiteText>DeckSettings</WhiteText> will help you find the
                  best settings for every game.
                </>
              }
            />
            <Feature
              icon={<FaSteam />}
              header="Deck Settings"
              description={
                <>
                  Access even more settings for your Steam Deck from the Quick
                  Access menu using plugins like{" "}
                  <WhiteText>Bluetooth</WhiteText> and{" "}
                  <WhiteText>PowerTools</WhiteText>.
                </>
              }
            />
          </GridRow>
          <GridRow>
            <Feature
              icon={<SiRetroarch />}
              header="EmuDeck Features"
              description={
                <>
                  <WhiteText>Emuchievements</WhiteText> and{" "}
                  <WhiteText>MetaDeck</WhiteText> are two plugins created as a
                  part of the EmuDeck project that add additional features to
                  emulated games.
                </>
              }
            />
            <Feature
              icon={<FaBug />}
              header="Desktop Apps"
              description={
                <>
                  Some plugins bring desktop app functionality to Gaming Mode,
                  such as <WhiteText>Discord Status</WhiteText>,{" "}
                  <WhiteText>FlatpakUpdater</WhiteText>, and{" "}
                  <WhiteText>SteamGridDB</WhiteText>.
                </>
              }
            />
            <Feature
              icon={<FaInfoCircle />}
              header="Game Info"
              description={
                <>
                  Get more information about your games, such as the time to
                  beat a game using <WhiteText>HLTB for Deck</WhiteText> or game
                  tutorials using <WhiteText>DeckFAQs</WhiteText>.
                </>
              }
            />
          </GridRow>
        </Section>
        <Section>
          <h2>At the press of a button</h2>
          <MarginP>
            Everything that Decky Loader has to offer is available in the Quick
            Access menu. Simply press the <img src={QAM} /> button on your Steam
            Deck, navigate to the <FaPlug /> tab, and start using plugins. You
            can download plugins from the Decky Plugin Store by clicking the{" "}
            <FaStore /> button.
          </MarginP>
          <Img900px src={DeckyOnDeck} />
        </Section>
        <Section accent={true}>
          <h2>Get started</h2>
          <MarginP>
            Ready to jump into Decky Loader? Access this website from your Steam
            Deck and download the installer below. Note that you may have to
            open it from the Dolphin (the file manager) if your browser cannot
            run files.
          </MarginP>
          <a href="/download" download="decky_installer.desktop">
            <Button>
              <FaDownload
                style={{
                  marginRight: "1rem",
                }}
              />
              Download
            </Button>
          </a>
        </Section>
        <Section dark={true}>
          <h2>Any questions?</h2>
          <QNA>
            <h4>
              Does Decky Loader work on Windows, Mac, or other operating
              systems?
            </h4>
            <p>
              No, Decky Loader is only intended for use with the installation of
              SteamOS provided on Steam Deck. HoloISO and other SteamOS
              third-party distributions are not officially supported and may not
              work with Decky Loader.
            </p>
          </QNA>
          <QNA>
            <h4>How can I get Decky Loader support?</h4>
            <p>
              If you have a question or a basic issue, you can ask it in our{" "}
              <a href="/discord" target="_blank">
                Discord server
              </a>
              . If you have a bug report or feature request, you can open an
              issue on{" "}
              <a
                href="https://github.com/SteamDeckHomebrew/decky-loader"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
          </QNA>
          <QNA>
            <h4>Does using Decky Loader void my Steam Deck warranty?</h4>
            <p>
              Multiple people have reported that they were able to return their
              Steam Deck under warranty after including that they use Decky
              Loader in their support ticket. However, you are responsible for
              the security of your device and should be careful when configuring
              plugins in Decky Loader.
            </p>
          </QNA>
          <QNA>
            <h4>Is Decky Loader open-source?</h4>
            <p>
              Steam Deck Homebrew prides itself on being open-source. You can
              view the source code for Decky Loader and our other projects on{" "}
              <a href="/github" target="_blank">
                GitHub
              </a>
              .
            </p>
          </QNA>
          <QNA>
            <h4>Is Decky Loader compatible with other plugin loaders?</h4>
            <p>
              No other plugin loaders are compatible with Decky Loader to our
              knowledge.
            </p>
          </QNA>
        </Section>
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;

const WhiteText = styled.span`
  color: white;
`;

const Img900px = styled.img`
  display: block;
  margin: auto;
  padding-top: 4rem;
  width: 70vw;
  max-width: 900px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const MarginP = styled.p`
  margin-top: 0.5rem;
`;

const QNA = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  h4 {
    margin-bottom: 0.5rem;
  }
`;
