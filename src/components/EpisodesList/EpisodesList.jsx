import EpisodeListStyled from "./EpisodeListStyled";
import { NavLink, useParams } from "react-router-dom";

function padToTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}:${padToTwoDigits(
    seconds
  )}`;
}
const EpisodeList = ({ episodeList }) => {
  const { podcastId } = useParams();

  return (
    <EpisodeListStyled>
      <span className="episodeList__head"> Episodes: {episodeList.length}</span>
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
              <td>
                <NavLink
                  ckassName="link"
                  to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                >
                  {episode.title}
                </NavLink>
              </td>
              <td>{new Date(episode.date).toLocaleDateString()}</td>
              <td>{convertMsToTime(episode.duration)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EpisodeListStyled>
  );
};

export default EpisodeList;
