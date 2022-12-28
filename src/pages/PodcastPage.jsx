import PodcastList from "../components/PodcastList/PodcastList";
import { useQuery } from "react-query";
import { useState } from "react";
import getPodcasts from "../repository/podcasts";

const PodcastPage = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [search, setSearch] = useState("");

  const { status } = useQuery(["podcasts"], getPodcasts, {
    staleTime: 86400000,
    onSuccess: setPodcasts,
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
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
      />
      <PodcastList podcasts={results} />
    </>
  );
};

export default PodcastPage;
