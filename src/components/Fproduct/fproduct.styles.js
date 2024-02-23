import { styled, css } from "styled-components"

export const Fproductcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: -150px;
  #imagefortablet {
    display: none;
  }
  #imageformobile {
    display: none;
  }
  @media (max-width: 768px) {
    #imagefortablet {
      display: block;
    }
    #imagefordesktop {
      display: none;
    }
    #imageformobile {
      display: none;
    }
  }
  @media (max-width: 386px) {
    #imagefortablet {
      display: none;
    }
    #imagefordesktop {
      display: none;
    }
    #imageformobile {
      display: block;
    }
  }
`
export const Floatcontainer = styled.div`
  position: relative;
  width: 379px;
  left: 165px;
  bottom: 500px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
  color: white;
  margin-bottom: 0px;
  @media (max-width: 1100px) {
    bottom: 400px;
  }
  @media (max-width: 850px) {
    bottom: 350px;
  }
  @media (max-width: 768px) {
    bottom: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 580px) {
    bottom: 200px;
  }
  @media (max-width: 386px) {
    bottom: 280px;
    width: 328px;
  }
`

export const NeW = styled.span`
  letter-spacing: 10px;
  text-transform: uppercase;
  font-size: 14px;
  margin-block-start: 1px;
`
export const Title = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 56px;
  font-weight: bold;
  @media (max-width: 1100px) {
    font-size: 46px;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }
  @media (max-width: 386px) {
    font-size: 36px;
  }
`
export const Paragraph = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
  width: 349px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const Buttoncontainer = styled.button`
  font-size: 13px;
  width: 180px;
  background-color: transparent;
  border: solid transparent;
`
