import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 2.0rem 0 2.0rem;
  text-align: center;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const LatestMsgContent = styled("h2")`
  position: relative;
  padding: 2.0rem 0 2.0rem;
  text-align: center;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const BaseRelease = styled("h6")`
  position: relative;
  padding: 0.0rem 0 0.0rem;
  text-align: center;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
