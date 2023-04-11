import WelcomePage, {
  WelcomeContainer,
  WelcomeColumn,
  YouTubeVideo,
  VideoWrapper,
} from "./index.styled";

export default () => {
  const videoURL =
    "https://www.youtube.com/watch?v=KRaWnd3LJfs&ab_channel=Maroon5VEVO";
  return (
    <WelcomePage>
      <WelcomeContainer>
        <WelcomeColumn>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          eligendi doloremque, veniam repudiandae fugiat laboriosam odit
          delectus obcaecati eos ullam consectetur accusamus repellat ex omnis
          libero. Debitis alias cum provident.
        </WelcomeColumn>
        <WelcomeColumn>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          explicabo eligendi ipsa rem saepe dicta perspiciatis magnam excepturi
          nihil. Corrupti delectus doloremque incidunt animi distinctio
          inventore, exercitationem molestias esse expedita?
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
    </WelcomePage>
  );
};
