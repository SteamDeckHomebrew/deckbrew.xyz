import * as React from "react";
import styled, { keyframes } from "styled-components";

import HeroPng from "../../images/hero.png";

export const Hero = () => {
  return (
    <>
      <HeroImgContainer>
        <Steam>
          <SteamLine delay={9} />
          <SteamLine delay={11} />
          <SteamLine delay={14} />
          <SteamLine delay={6} />
          <SteamLine delay={2} />
          <SteamLine delay={10} />
          <SteamLine delay={7} />
          <SteamLine delay={12} />
          <SteamLine delay={3} />
          <SteamLine delay={8} />
          <SteamLine delay={1} />
          <SteamLine delay={5} />
          <SteamLine delay={4} />
          <SteamLine delay={13} />
        </Steam>
        <HeroImg src={HeroPng} />
      </HeroImgContainer>
      <HeroText>
        <HeroH2 style={{ fontWeight: 400 }}>
          Dozens of plugins to choose from.
        </HeroH2>
        <HeroH2>Unlock your Steam Deck's potential.</HeroH2>
      </HeroText>
    </>
  );
};

export default Hero;

const HeroImgContainer = styled.div`
  /* vertical gradient of dark to light accent that becomes transparent 90% to 100% */
  background: linear-gradient(
    180deg,
    #293051 0%,
    #40afa8 84%,
    rgba(0, 0, 0, 0) 95%
  );
  display: flex;
`;

const HeroImg = styled.img`
  display: block;
  margin: auto;
  padding-top: 5rem;

  max-width: 1200px;
  width: 80vw;
  height: auto;

  z-index: 2;

  /* steam is hidden if 460 or less, so decrease top padding */
  @media screen and (max-width: 460px) {
    padding-top: 2rem;
  }
`;

const HeroText = styled.div`
  margin: auto;
  margin-bottom: 3rem;
  width: fit-content;
  max-width: 80vw;

  @media screen and (max-width: 560px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 420px) {
    margin-bottom: 1rem;
  }
`;

const HeroH2 = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 560px) {
    font-size: 36px;
  }
  @media screen and (max-width: 420px) {
    font-size: 24px;
  }
`;

const Steam = styled.div`
  position: absolute;
  display: flex;
  padding: 0 20px;
  z-index: 1;

  top: 200px;
  right: calc(28.5vw);

  /* if screen is 1500 or more */
  @media screen and (min-width: 1500px) {
    right: calc(50vw - 600px + 280px);
  }

  /* hide if 460 or less */
  @media screen and (max-width: 460px) {
    display: none;
  }
`;

const SteamAnimation = keyframes`
    0% {
        transform: translateY(0) scaleX(1);
    }
    15% {
        opacity: 1;
    }
    50% {
        transform: translateY(-150px) scaleX(5);
    }
    95% {
        opacity: 0;
    }
    100% {
        transform: translateY(-300px) scaleX(10);
    }
`;

const SteamLine = styled.span<{ delay: number }>`
  position: relative;
  bottom: 50px;
  display: block;
  margin: 0 2px 50px;
  min-width: 8px;
  height: 120px;

  background: #fff;
  opacity: 0;
  filter: blur(10px);
  border-radius: 50%;

  animation: ${SteamAnimation} 5s infinite linear;
  animation-delay: ${(props) => props.delay * -0.5}s;

  /* if screen is less than 1500 */
  @media screen and (max-width: 1500px) {
    min-width: calc(0.5333vw);
    margin: 0 calc(0.1333vw) 50px;
  }
`;
