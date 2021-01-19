import styled from "styled-components"

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  main {
    width: 80%;
    min-height: 86vh;
    margin: auto;
    display: grid;
    place-items: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
export const StyledHeader = styled.header`
  height: 7vh;
  border-bottom: solid 1px ${({ theme }) => theme.color.grey.darken};

  .wrapper {
    width: 80%;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 90%;
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
