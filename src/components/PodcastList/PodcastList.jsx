import { useQuery } from "react-query";
import PodcastCard from "../PodcastCard/PodcastCard";
import PodcastListSyled from "./PodcastListStyled";

const PodcastList = () => {
  const getPodcasts = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);

    return response.json();
  };

  const { data, status } = useQuery(["podcasts"], getPodcasts, {
    staleTime: 86400000,
  });

  if (status === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <PodcastListSyled>
      {data.feed.entry.map((pod) => (
        <li className="podcast-list__item" key={pod.id.attributes["im:id"]}>
          <PodcastCard podcast={pod} />
        </li>
      ))}
    </PodcastListSyled>
  );
};

export default PodcastList;
