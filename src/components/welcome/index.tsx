import { Box, Container, Typography } from "@mui/material";
import WelcomePage, {
  WelcomeContainer,
  WelcomeColumn,
  YouTubeVideo,
  VideoWrapper,
  BoxIconWrapper,
  Icons,
} from "./index.styled";
import ProgressIcon from "@/assets/graphIcon.png";
import EasyIcon from "@/assets/easyIcon.png";
export default () => {
  const videoURL =
    "https://www.youtube.com/watch?v=KRaWnd3LJfs&ab_channel=Maroon5VEVO";
  return (
    <WelcomePage>
      <Container>
        <WelcomeContainer>
          <WelcomeColumn>
            <BoxIconWrapper>
              <Icons>
                <img src={EasyIcon} alt="A progress icon" />
              </Icons>
              <Typography variant="h4">Easy to use</Typography>
            </BoxIconWrapper>

            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              explicabo eligendi ipsa rem saepe dicta perspiciatis magnam
              excepturi nihil. Corrupti delectus doloremque incidunt animi
              distinctio inventore, exercitationem molestias esse expedita?
            </Typography>
          </WelcomeColumn>
          <WelcomeColumn>
            <BoxIconWrapper>
              <Icons>
                <img src={ProgressIcon} alt="A progress icon" />
              </Icons>
              <Typography variant="h4">See your progress</Typography>
            </BoxIconWrapper>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              explicabo eligendi ipsa rem saepe dicta perspiciatis magnam
              excepturi nihil. Corrupti delectus doloremque incidunt animi
              distinctio inventore, exercitationem molestias esse expedita?
            </Typography>
          </WelcomeColumn>
          <YouTubeVideo>
            <VideoWrapper>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xNRJwmlRBNU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
          </YouTubeVideo>
        </WelcomeContainer>
      </Container>
    </WelcomePage>
  );
};
