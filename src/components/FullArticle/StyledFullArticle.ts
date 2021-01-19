import styled from "styled-components"

export const StyledFullArticle = styled.div`
  width: 600px;
  background: white;
  display: flex;
  margin: 20px auto;
  flex-wrap: wrap;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }

  p {
    margin: 20px 0;
    line-height: 22px;
  }

  a {
    font-weight: bold;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
