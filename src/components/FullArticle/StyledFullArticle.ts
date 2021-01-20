import styled from "styled-components"

export const StyledFullArticle = styled.div`
  width: 600px;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  flex-wrap: wrap;
  padding: 20px 20px 10px 20px;
  @media (max-width: 768px) {
    width: 90%;
  }

  img {
    margin-bottom: 5px;
  }
  p {
    margin: 20px 0;
    line-height: 22px;
  }

  .link {
    margin: 20px auto;
  }

  a {
    font-weight: bold;
    padding: 10px 20px;
    outline: none;
    border-radius: 2px;
    background: black;
    color: white;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`
