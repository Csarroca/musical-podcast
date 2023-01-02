import styled from "styled-components";

const SideCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  width: 225px;
  height: 100%;
  align-items: center;
  font-size: 0.75rem;
  border-radius: 2px;

  .side-card {
    &__image-container {
      display: flex;
      justify-content: center;
      width: 90%;
      margin-top: 15px;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    }
    &__cover {
      border-radius: 5px;
      margin-bottom: 15px;
    }

    &__info {
      width: 90%;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
      margin-top: 15px;
      padding-bottom: 15px;
    }

    &__name {
      font-weight: bold;
      margin: 0;
      font-size: 0.75rem;
    }

    &__author {
      font-size: 0.75rem;
      font-style: italic;
    }

    &__description {
      font-weight: bold;
      margin: 15px 10px 0 10px;
    }

    &__description-text {
      line-height: 1.3;
      font-style: italic;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.neutral.secundaryText};
    }
  }
`;

export default SideCardStyled;
