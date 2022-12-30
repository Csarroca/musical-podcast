import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EpisodeList from "../components/EpisodesList/EpisodesList";
import SideCard from "../components/SideCard/SideCard";
import { getPodcast } from "../repository/podcasts";

const initialPodcast = {
  name: "",
  image: "",
  author: "",
  description: "",
};

const PodcastDetailedPage = () => {
  const [podcast, setPodcast] = useState(initialPodcast);

  const { id } = useParams();

  const { status, data } = useQuery(["podcast"], () => getPodcast(id), {
    staleTime: 86400000,
    onSuccess: setPodcast,
  });
  console.log(data);

  if (status === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>Not found</p>;
  }
  return (
    <>
      <SideCard podcast={podcast} />
      <EpisodeList />
    </>
  );
};

export default PodcastDetailedPage;
