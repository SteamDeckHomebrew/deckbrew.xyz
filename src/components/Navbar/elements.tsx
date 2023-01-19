import styled from "styled-components";
import { Link } from "gatsby";

export const Nav = styled.nav`
  background: var(--dark);
  position: fixed;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: var(--page-width);
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  min-width: 0;
`;

export const NavLogoImg = styled.img`
  height: 52px;
  width: 52px;
  margin-right: 12px;
`;

export const NavMobile = styled.div`
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
