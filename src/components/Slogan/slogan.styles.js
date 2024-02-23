import styled, { css } from "styled-components"

export const Slogancontainer = styled.div`
  display: flex;
  margin: 152px 165px 200px 165px;
  gap: 125px;
  font-size: 15px;
  #info {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  #image {
    width: 50%;
  }
  @media (max-width: 1000px) {
    gap: 80px;
    #image {
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 56px 39px 200px 39px;
    gap: 63px;
    #info {
      width: 100%;
      text-align: center;
      padding-left: 58px;
      padding-right: 58px;
    }
    #image {
      width: 100%;
    }
  }
  @media (max-width: 386px) {
    flex-direction: column;
    margin: 56px 24px 200px 24px;
    gap: 80px;
    #info {
      padding: 0px;
    }
  }
`

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
`
