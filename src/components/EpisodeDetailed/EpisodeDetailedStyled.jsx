import styled from "styled-components";

const EpisodeDetailedStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  border-radius: 2px;
`;

export default EpisodeDetailedStyled;
