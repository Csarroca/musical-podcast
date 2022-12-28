import { useQuery } from "react-query";
import PodcastCard from "../PodcastCard/PodcastCard";

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
    <ul className="podcast-list">
      <li className="podcast-list__card">
        {data.feed.entry.map((pod) => (
          <PodcastCard podcast={pod} key={pod.id.attributes["im:id"]} />
        ))}
      </li>
    </ul>
  );
};

export default PodcastList;
