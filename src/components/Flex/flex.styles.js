import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap}px;
`
