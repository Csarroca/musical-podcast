import { useQuery } from "react-query";
import PodcastCard from "../PodcastCard/PodcastCard";
import PodcastListSyled from "./PodcastListStyled";

const PodcastList = () => {
  const getPodcasts = async () => {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );

    const data = response.json();
    return data;
  };

  const { data, status } = useQuery(["podcasts"], getPodcasts);

  if (status === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <PodcastListSyled>
      {data.feed.entry.map((pod) => (
        <li className="podcast-list__item">
          <PodcastCard podcast={pod} key={pod.id.attributes["im:id"]} />
        </li>
      ))}
    </PodcastListSyled>
  );
};

export default PodcastList;
