import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SideCard from "../components/SideCard/SideCard";
import getPodcasts from "../repository/podcasts";

const initialPodcast = {
  name: "a",
  image: "",
  author: "",
  description: "",
};

const PodcastDetailedPage = () => {
  const [podcast, setPodcast] = useState(initialPodcast);

  const { id } = useParams();

  const { status, data } = useQuery(["podcasts"], getPodcasts, {
    staleTime: 86400000,
    onSuccess: setPodcast,
  });

  const getPodcastDetailed = useCallback(
    (podcastId) => {
      if (!data) {
        return;
      }
      const podcastFiltered = data.filter(
        (podcast) => podcast.id === podcastId
      );

      setPodcast(podcastFiltered[0]);
    },
    [data]
  );

  useEffect(() => {
    getPodcastDetailed(id);
  }, [getPodcastDetailed, id]);

  if (status === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return <SideCard podcast={podcast} />;
};

export default PodcastDetailedPage;
