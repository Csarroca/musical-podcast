import PodcastList from "../components/PodcastList/PodcastList";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { getPodcasts } from "../repository/podcasts";
import Filter from "../components/Filter/Filter";

const PodcastPage = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { status, data: podcasts } = useQuery(["podcasts"], getPodcasts, {
    staleTime: 86400000,
    onSuccess: (podcasts) => {
      podcasts.forEach((podcast) => {
        queryClient.setQueryData([podcast, podcast.id].podcast);
      });
    },
  });
  if (status === "loading") {
    return <p>Loading podcasts...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? podcasts
    : podcasts.filter(
        (podcast) =>
          podcast.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          podcast.author.toLowerCase().includes(search.toLocaleLowerCase())
      );
  return (
    <>
      <Filter search={search} searcher={searcher} results={results.length} />

      <PodcastList podcasts={results} />
    </>
  );
};

export default PodcastPage;
