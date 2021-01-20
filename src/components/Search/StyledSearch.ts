import styled from "styled-components"

export const StyledSearch = styled.div`
  margin: 10px 0;
  background: white;
  width: 100%;
  height: 80px;
  display: grid;
  place-items: center;

  form {
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  input {
    width: 75%;
    border: none;
    border-bottom: black solid 1px;
    height: 30px;
    outline: none;
  }

  button {
    color: white;
    background: ${({ theme }) => theme.color.black};
    margin-left: 10px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
