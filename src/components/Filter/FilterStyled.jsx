import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  align-items: center;
  padding: 20px;

  .filter {
    &__input {
      color: ${({ theme }) => theme.colors.neutral.secundaryText};
      border: 1px solid rgba(0, 0, 0, 0.16);
      border-radius: 3px;
      padding: 7px;
      font-size: 1rem;
      width: 35%;
    }

    &__counter {
      color: white;
      background-color: #3a61b6;
      border-radius: 7px;
      border: 3px solid #3a61b6;
    }
  }
`;

export default FilterStyled;
