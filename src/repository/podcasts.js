const getPodcasts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}`);

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

export default getPodcasts;
