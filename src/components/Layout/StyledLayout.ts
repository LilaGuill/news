import styled from "styled-components"

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  main {
    width: 80%;
    min-height: 83vh;
    margin: auto;
    display: grid;
    place-items: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
export const StyledHeader = styled.header`
  height: 10vh;
  border-bottom: solid 1px ${({ theme }) => theme.color.grey.medium};
  background: white;

  .wrapper {
    width: 80%;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 90%;
    }
    h3 {
      margin-right: 10px;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
export const StyledFooter = styled.footer`
  height: 7vh;
  width: 80%;
  margin: auto;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`
