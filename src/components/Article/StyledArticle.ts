import styled from "styled-components"

export const StyledArticle = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  background: white;
  margin-bottom: 10px;
  margin-left: 10px;
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
    height: 150px;
    object-fit: fill;
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
