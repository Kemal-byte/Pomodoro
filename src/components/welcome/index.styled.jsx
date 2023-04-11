import styled from "styled-components";

const WelcomePage = styled.section`
  padding-top: 6rem;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  overflow: hidden;
`;

export const WelcomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WelcomeColumn = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  &:first-child {
    background-color: #b02b2b;
  }
  &:hover {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const YouTubeVideo = styled.div`
  grid-column: 1 / span 2;
  /* max-height: 400px; */
  width: 100%;
  min-height: 400px;
  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
`;
export const VideoWrapper = styled.div`
  margin: auto auto;
  max-width: 711px;
  min-width: 300px;
  height: 100%;
`;

export default WelcomePage;
