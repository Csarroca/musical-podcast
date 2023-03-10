import styled from "styled-components";

const EpisodeDetailedStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  border-radius: 2px;
  padding: 20px 10px;

  audio {
    height: 30px;
    width: 100%;
  }

  .episode__description {
    line-height: 1.5;
  }
`;

export default EpisodeDetailedStyled;
