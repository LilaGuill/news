import styled, { css } from "styled-components"

type SizeType = {
  size?: string
  hasHover: boolean
}

export const StyledTitle = styled.div`
  font-size: ${({ size }: SizeType) => (size === "large" ? "24px" : "14px")};
  font-weight: bold;
  color: black;
  margin: 10px 0;
  line-height: ${({ size }: SizeType) => (size === "large" ? "30px" : "22px")};

  ${({ hasHover }) =>
    hasHover &&
    css`
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `}
`
