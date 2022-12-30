import EpisodeListStyled from "./EpisodeListStyled";

const EpisodeList = () => {
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
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Jim parrales excuses of waiting</td>
            <td>12/12/2022</td>
            <td>14:00</td>
          </tr>
        </tbody>
      </table>
    </EpisodeListStyled>
  );
};

export default EpisodeList;
