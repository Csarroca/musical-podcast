import styled from "styled-components";

const EpisodeListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-left: 40px;
  width: 100%;

  table {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.short};
    border: solid 2px #f6f6f6b8;
    padding-top: 15px;
  }

  th {
    text-align: left;
    padding: 15px 15px;
  }

  td {
    padding: 15px 15px;
  }

  tbody tr:nth-child(odd) {
    background-color: #f6f6f6b8;
  }

  a {
    outline: none;
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.colors.brand.primary};
    }
    &:link {
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }

  .episodeList__head {
    padding: 15px;
    font-weight: bold;
    border: solid 2px #f6f6f6b8;
    box-shadow: ${({ theme }) => theme.boxShadow.short};
  }
`;

export default EpisodeListStyled;
