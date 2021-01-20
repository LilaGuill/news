import styled, { css } from "styled-components"

type CategoryType = {
  isActive: boolean
}

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: solid 1px ${({ theme }) => theme.color.grey.medium};

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

export const StyledCategory = styled.div`
  height: 100%;
  background: white;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  border-radius: ${({ theme }) => theme.border.radius.small};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;

  ${({ isActive }: CategoryType) =>
    isActive === true &&
    css`
      background: ${({ theme }) => theme.color.grey.darken};
      color: white;
    `}

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 40%;
    margin: 0 5px 5px 5px;
  }
`
