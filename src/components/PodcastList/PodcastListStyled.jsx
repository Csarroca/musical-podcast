import styled from "styled-components";

const PodcastListSyled = styled.ul`
  display: grid;
  grid-row-gap: 50px;
  grid-column-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  margin: 0;
  padding: 0;
  padding-top: 50px;

  li,
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .podcast-list__item {
    display: flex;
    justify-content: center;
  }
`;

export default PodcastListSyled;
