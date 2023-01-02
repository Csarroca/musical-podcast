import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EpisodeList from "../../components/EpisodesList/EpisodesList";
import SideCard from "../../components/SideCard/SideCard";
import { getEpisodeList, getPodcast } from "../../repository/podcasts";
import PodcastDetailedPageStyled from "./PodcastDetailedPageStyled";

const initialPodcast = {
  name: "",
  image: "",
  author: "",
  description: "",
};

const PodcastDetailedPage = () => {
  const [podcast, setPodcast] = useState(initialPodcast);
  const [episodeList, setEpisodeList] = useState();

  const { id } = useParams();

  const { status, data } = useQuery(["podcast"], () => getPodcast(id), {
    staleTime: 86400000,
    onSuccess: setPodcast,
  });

  const { status: statusList } = useQuery(
    ["episodeList"],
    () => getEpisodeList(id),
    {
      staleTime: 86400000,
      onSuccess: setEpisodeList,
    }
  );

  if (status === "loading" || statusList === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>Not found</p>;
  }
  return (
    <PodcastDetailedPageStyled>
      <SideCard podcast={podcast} />
      <EpisodeList episodeList={episodeList} />
    </PodcastDetailedPageStyled>
  );
};

export default PodcastDetailedPage;
