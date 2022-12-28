import PodcastCard from "../PodcastCard/PodcastCard";
import PodcastListSyled from "./PodcastListStyled";

const PodcastList = ({ podcasts }) => {
  return (
    <PodcastListSyled>
      {podcasts.map((podcast) => (
        <li className="podcast-list__item" key={podcast.id}>
          <PodcastCard podcast={podcast} />
        </li>
      ))}
    </PodcastListSyled>
  );
};

export default PodcastList;
