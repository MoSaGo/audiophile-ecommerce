import styled, { css } from "styled-components"

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.pallete.main.orange};
    color: white;
    &:hover {
      color: white;
      opacity: 50%;
    }
  `,
  secondary: css`
    border-color: black;
    background-color: transparent;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  `,
  tertiary: css`
    border-color: black;
    background-color: black;
    color: white;
    &:hover {
      background-color: #4c4c4c;
      color: white;
    }
  `,
}
export const ButtonContainer = styled.button`
  padding: 15px 30px;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
  border: 1px solid transparent;
  background-color: transparent;
  width: 100%;
  &:hover {
    color: orange;
    cursor: pointer;
  }
  ${(props) => variants[props.variant]};
  ${(props) =>
    props.whitArrow &&
    css`
      background-color: transparent;
    `};
`
