import HTMLReactParser from "html-react-parser";
import { optionsParse } from "../../repository/utils";
import EpisodeDetailedStyled from "./EpisodeDetailedStyled";

const EpisodeDetailed = ({ episode }) => {
  return (
    <EpisodeDetailedStyled>
      <h2 className="episode__title">{episode.title}</h2>

      <p
        className="episode__description"
        dangerouslySetInnerHTML={{
          __html: HTMLReactParser(episode.description, optionsParse),
        }}
      />

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
