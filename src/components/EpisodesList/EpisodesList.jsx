import EpisodeListStyled from "./EpisodeListStyled";
import { NavLink, useParams } from "react-router-dom";
import { convertMsToTime } from "../../repository/utils";

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
                  className="link"
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
