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
      padding: 4px;
      font-weight: bold;
      color: white;
      background-color: ${({ theme }) => theme.colors.brand.primary};
      border-radius: 7px;
      border: 3px solid ${({ theme }) => theme.colors.brand.primary};
    }
  }
`;

export default FilterStyled;
