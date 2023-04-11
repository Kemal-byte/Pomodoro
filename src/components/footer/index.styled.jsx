import styled from "styled-components";
export const FooterContainer = styled.footer`
  /* background-color: #333; */
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* height: 80px; */
  border-top: 1px solid #afaaaa;
  gap: 0.5rem;
  padding: 1rem;
`;

export const FooterText = styled.p`
  font-size: 16px;
  text-align: center;
`;
export const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const FooterIcon = styled.a`
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;
