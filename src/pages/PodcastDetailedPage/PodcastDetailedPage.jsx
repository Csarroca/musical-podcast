import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EpisodeList from "../../components/EpisodesList/EpisodesList";
import SideCard from "../../components/SideCard/SideCard";
import { getEpisodeList, getPodcast } from "../../repository/podcasts";
import PodcastDetailedPageStyled from "./PodcastDetailedPageStyled";

const PodcastDetailedPage = () => {
  const { podcastId } = useParams();

  const { status, data: podcast } = useQuery(
    ["podcast", podcastId],
    () => getPodcast(podcastId),
    {
      staleTime: 86400000,
      enabled: !!podcastId,
    }
  );

  const { data: episodeList, status: statusList } = useQuery(
    ["episodeList", podcastId],
    () => getEpisodeList(podcastId),
    {
      staleTime: 86400000,
      enabled: !!podcastId,
    }
  );

  if (status === "loading" || statusList === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  if (!podcast || !episodeList) {
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
