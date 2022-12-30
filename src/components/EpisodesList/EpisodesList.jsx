import EpisodeListStyled from "./EpisodeListStyled";

const EpisodeList = ({ episodeList }) => {
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
              <td>{episode.durations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EpisodeListStyled>
  );
};

export default EpisodeList;
