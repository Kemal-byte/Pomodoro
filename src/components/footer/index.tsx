import GithubIcon from "@/assets/Github.png";
import PersonalIcon from "@/assets/PersonalWeb.png";
import Linkedin from "@/assets/Linkedin.png";
import {
  FooterContainer,
  FooterText,
  FooterIcon,
  FooterIconsContainer,
} from "./index.styled";

export default () => {
  return (
    <FooterContainer>
      <FooterIconsContainer>
        <FooterIcon href="https://github.com/yourusername">
          <img src={GithubIcon} alt="Github page link" />
        </FooterIcon>
        <FooterIcon href="https://twitter.com/yourusername">
          <img src={PersonalIcon} alt="Personal website link" />
        </FooterIcon>
        <FooterIcon href="https://www.linkedin.com/in/yourusername/">
          <img src={Linkedin} alt="Linkedin personal page" />
        </FooterIcon>
      </FooterIconsContainer>
      <FooterText>
        Made with <span style={{ color: "#ff3e3e" }}>❤</span> by Kemal KARABULUT
      </FooterText>
      <FooterText>@PomoPro 2023. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};
