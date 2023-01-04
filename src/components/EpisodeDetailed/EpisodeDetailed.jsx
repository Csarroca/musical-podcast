import EpisodeDetailedStyled from "./EpisodeDetailedStyled";

const EpisodeDetailed = ({ episode }) => {
  return (
    <EpisodeDetailedStyled>
      <h2>{episode.title}</h2>

      <p>{episode.description}</p>
      {/* <p dangerouslySetInnerHTML={__html: DOMPurify.sanitize({episode.description})} /> */}

      <audio
        className="episode__audio"
        controls
        preload="auto"
        src={episode.url}
      ></audio>
    </EpisodeDetailedStyled>
  );
};

export default EpisodeDetailed;
