import styled from "styled-components";

const EpisodeDetailedStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  border-radius: 2px;
  padding: 20px 10px;

  video {
    height: 30px;
  }
`;

export default EpisodeDetailedStyled;
