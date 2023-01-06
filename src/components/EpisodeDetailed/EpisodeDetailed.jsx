import EpisodeDetailedStyled from "./EpisodeDetailedStyled";

const EpisodeDetailed = ({ episode }) => {
  return (
    <EpisodeDetailedStyled>
      <h2>{episode.title}</h2>

      <p dangerouslySetInnerHTML={{ __html: episode.description }} />

      <audio
        data-testid="audio"
        className="episode__audio"
        controls
        preload="auto"
        src={episode.url}
      ></audio>
    </EpisodeDetailedStyled>
  );
};

export default EpisodeDetailed;
