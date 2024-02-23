import styled, { css } from "styled-components"

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  @media (max-width: 909px) {
    font-size: 12px;
  }
`
