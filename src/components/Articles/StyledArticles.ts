import styled from "styled-components"

export const StyledArticles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
