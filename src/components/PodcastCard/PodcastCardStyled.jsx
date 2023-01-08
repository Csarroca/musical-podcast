import styled from "styled-components";

const PodcastCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  padding: 0 7px 10px 7px;
  border-radius: 5px;
  cursor: pointer;

  .podcast-card__cover {
    border-radius: 50%;
    margin-top: -50px;
    height: 100px;
    width: 100px;
  }

  .podcast-card__name {
    padding: 7px 0;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.primaryText};
  }

  .podcast-card__info {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.secundaryText};
  }
`;

export default PodcastCardStyled;
