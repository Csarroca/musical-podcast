import EpisodeDetailedStyled from "./EpisodeDetailedStyled";
import DOMPurify from "dompurify";

const EpisodeDetailed = ({ episode }) => {
  return (
    <EpisodeDetailedStyled>
      <h2>{episode.title}</h2>

      <p>{episode.description}</p>
      {/* <p dangerouslySetInnerHTML={__html: DOMPurify.sanitize({episode.description})} /> */}

      <video src={episode.url} controls={true}></video>
    </EpisodeDetailedStyled>
  );
};

export default EpisodeDetailed;
