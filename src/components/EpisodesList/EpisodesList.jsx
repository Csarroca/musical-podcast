import EpisodeListStyled from "./EpisodeListStyled";

const EpisodeList = ({ episodeList }) => {
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; //ES6 interpolated literals/template literals //If seconds is less than 10 put a zero in front.return`$minutes:$(seconds <10?"0":"")$seconds`;
  };
  return (
    <EpisodeListStyled>
      <span className="episodeList__head"> Episodes: 110</span>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodeList.map((episode) => (
            <tr key={episode.trackId}>
              <td>{episode.title}</td>
              <td>{episode.date}</td>
              <td>{millisToMinutesAndSeconds(episode.duration)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EpisodeListStyled>
  );
};

export default EpisodeList;
