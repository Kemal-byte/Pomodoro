import styled from "styled-components";
import Colors from "../utilities/commonCss/colors";

export const ContainerMain = styled.main`
  text-align: center;
  color: ${Colors.primaryYellow};
  background-color: ${Colors.primaryBG};
  min-height: 100vh;
  width: 100%;
  padding-top: 4rem;
  position: relative;
`;
export const Container = styled.nav`
  width: 500px;
  margin: auto;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 545px) {
    width: 90%;
  }
`;
