import EpisodeDetailedStyled from "./EpisodeDetailedStyled";

const EpisodeDetailed = ({ episode }) => {
  return (
    <EpisodeDetailedStyled>
      <h2>{episode.title}</h2>

      <p>{episode.description}</p>

      <video
        src="https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_588.mp3?dest-id=2422538"
        width="640"
        height="480"
        controls="true"
      ></video>
    </EpisodeDetailedStyled>
  );
};

export default EpisodeDetailed;
