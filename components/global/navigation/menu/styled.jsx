import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../../theme/global/breakpoints";

export const NavbarMenu = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
`;

export const IconMenu = styled.div`
  margin-left: auto;
  cursor: pointer;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: none;
  }
`;

export const NavbarTitle = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  h1 {
    font-weight: 800;
    font-size: 28px;
    color: rgb(62 80 103);
  }
`;

export const NavbarList = styled.ul`
  display: none;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: flex;
    gap: 2rem;

    li {
      font-weight: 500;
      font-size: 18px;
      color: rgb(62 80 103);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
