import styled from "styled-components"

export const Checkoutcontainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 142px 165px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin: 48px 39px;
  }
  @media (max-width: 386px) {
    margin: 48px 24px;
  }
`
