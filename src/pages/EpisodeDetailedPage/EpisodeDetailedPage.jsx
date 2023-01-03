import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EpisodeDetailed from "../../components/EpisodeDetailed/EpisodeDetailed";
import SideCard from "../../components/SideCard/SideCard";
import { getEpisodeList, getPodcast } from "../../repository/podcasts";
import EpisodeDetailedPageStyled from "./EpisodeDetailedPageStyled";

const EspisodeDetailedPage = () => {
  const { podcastId, episodeId } = useParams();

  const { data: podcast } = useQuery(
    ["podcast", podcastId],
    () => getPodcast(podcastId),
    {
      staleTime: 86400000,
      enabled: !!podcastId,
    }
  );

  const { data: episodeList } = useQuery(
    ["episodeList", podcastId],
    () => getEpisodeList(podcastId),
    {
      staleTime: 86400000,
      enabled: !!podcastId,
    }
  );

  const episode = episodeList.find((episode) => {
    if (episode.trackId === episodeId) return episode;
    return episode;
  });
  return (
    <EpisodeDetailedPageStyled>
      <SideCard podcast={podcast} />
      <EpisodeDetailed episode={episode} />
    </EpisodeDetailedPageStyled>
  );
};

export default EspisodeDetailedPage;
