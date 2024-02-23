import styled from "styled-components"

export const Secondcardcontainer = styled.div`
  margin: 0px 165px 48px 165px;
  display: flex;
  align-items: center;
  #imagetablet {
    display: none;
  }
  #imagemobile {
    display: none;
  }
  @media (max-width: 768px) {
    margin: 32px 39px;
    #imagetablet {
      display: flex;
    }
    #imagedesktop {
      display: none;
    }
    #imagemobile {
      display: none;
    }
  }
  @media (max-width: 386px) {
    margin: 32px 24px;
    #imagemobile {
      display: flex;
    }
    #imagetablet {
      display: none;
    }
    #imagedesktop {
      display: none;
    }
  }
`
export const Title = styled.span`
  color: black;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 28px;
`
export const Infocontainer = styled.div`
  left: 250px;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    left: 100px;
  }
  @media (max-width: 386px) {
    left: 40px;
  }
`
