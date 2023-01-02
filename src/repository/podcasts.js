const url = process.env.REACT_APP_API_URL;

export const getPodcasts = async () => {
  const response = await fetch(url);

  const data = await response.json();

  return data.feed.entry.map((podcast) => {
    return {
      name: podcast["im:name"].label,
      image: podcast["im:image"][2].label,
      author: podcast["im:artist"].label,
      id: podcast.id.attributes["im:id"],
      description: podcast.summary.label,
    };
  });
};

export const getPodcast = async (podcastId) => {
  const podcasts = await getPodcasts();

  return podcasts.filter((podcast) => podcast.id === podcastId)[0];
};

export const getEpisodeList = async (podcastId) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=1000`
  );
  const episodeList = await response.json();

  const data = episodeList.results.map((podcast) => {
    return {
      title: podcast.trackName,
      duration: podcast.trackTimeMillis,
      date: podcast.releaseDate,
      trackId: podcast.trackId,
    };
  });
  return data;
};
