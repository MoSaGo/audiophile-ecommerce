import styled from "styled-components"

export const Seeproductcontainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0px 165px;
  gap: 30px;
  background-color: white;
  @media (max-width: 768px) {
    padding: 0px 39px;
    gap: 10px;
  }
  @media (max-width: 386px) {
    flex-direction: column;
    padding: 0px, 24px;
  }
`
export const Divs = styled.div`
  width: 30.5%;
  @media (max-width: 768px) {
    width: 33%;
  }
  @media (max-width: 386px) {
    width: 100%;
    gap: 0px;
  }
`
