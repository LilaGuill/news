import styled from "styled-components"

export const StyledArticle = styled.div`
  width: 250px;
  min-height: 100px;
  background: white;
  margin-bottom: 10px;
  border: solid 1px ${({ theme }) => theme.color.grey.light};
  border-radius: ${({ theme }) => theme.border.radius.small};
  padding: 10px;

  &:hover {
    cursor: pointer;
  }

  .image {
    width: 100%;
    height: 150px;
    object-fit: fill;
  }

  .title {
    font-family: helvetica;
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin: 10px 0;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .date {
    margin: 5px 0;
    font-size: 14px;
    color: black;
    font-weight: bold;
  }

  .description {
    font-size: 14px;
    color: black;
    margin: 5px 0;
    min-height: 100px;
    margin-top: 10px;
  }
`
