import styled from "styled-components"

type ArticleType = {
  index?: number | string
}

export const StyledArticle = styled.div`
  position: relative;
  width: ${({ index }: ArticleType) =>
    index === 0 || index === 1 ? "46%" : "250px"};
  height: ${({ index }: ArticleType) =>
    index === 0 || index === 1 ? "400px" : "300px"};
  background: white;
  margin-bottom: 10px;
  border: solid 1px ${({ theme }) => theme.color.grey.light};
  border-radius: ${({ theme }) => theme.border.radius.small};
  padding: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    cursor: pointer;
  }

  .image {
    width: 100%;

    height: ${({ index }: ArticleType) =>
      index === 0 || index === 1 ? "250px" : "150px"};
    object-fit: cover;
    @media (max-width: 768px) {
      height: 200px;
    }
  }

  .date {
    position: absolute;
    bottom: 5px;
    margin: 5px 0;
    font-size: 14px;
    color: black;
  }
`
