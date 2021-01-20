import styled from "styled-components"

export const StyledArticles = styled.div`
  width: 100%;
  display: flex;
  min-height: 83vh;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
