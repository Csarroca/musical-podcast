import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  height: 50px;
  font-size: 0.75rem;
  align-items: center;
  padding: 0 10px;

  .link {
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.colors.brand.primary};
    }
    &:link {
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }
`;

export default HeaderStyled;
