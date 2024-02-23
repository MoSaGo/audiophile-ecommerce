import styled from "styled-components"

export const Alsolikecontainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 11px;
  }
  @media (max-width: 386px) {
    flex-direction: column;
  }
`
export const Principalcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  gap: 64px;
  margin: 160px 165px 0px 165px;
  @media (max-width: 768px) {
    gap: 11px;
    margin: 120px 39px 0px 39px;
  }
  @media (max-width: 386px) {
    margin: 120px 24px 0px 24px;
    flex-direction: column;
  }
`

export const Title = styled.span`
  font-size: 32px;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
  }
`
