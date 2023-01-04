import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EpisodeDetailed from "../../components/EpisodeDetailed/EpisodeDetailed";
import SideCard from "../../components/SideCard/SideCard";
import { getEpisodeList, getPodcast } from "../../repository/podcasts";
import EpisodeDetailedPageStyled from "./EpisodeDetailedPageStyled";

const EspisodeDetailedPage = () => {
  const { podcastId, episodeId } = useParams();

  const { data: podcast, status } = useQuery(
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

  const episode = episodeList.find(
    (element) => element.trackId === Number(episodeId)
  );
  return (
    <EpisodeDetailedPageStyled>
      <SideCard podcast={podcast} />
      <EpisodeDetailed episode={episode} />
    </EpisodeDetailedPageStyled>
  );
};

export default EspisodeDetailedPage;
