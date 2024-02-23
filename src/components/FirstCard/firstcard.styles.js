import styled from "styled-components"

export const Firstcardcontainer = styled.div`
  margin: 150px 165px 48px 165px;
  background-color: ${(props) => props.theme.pallete.main.orange};
  padding-top: 96px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  #circles {
    width: 100%;
    z-index: 1;
    position: absolute;
    left: -220px;
  }
  @media (max-width: 950px) {
    padding-top: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: centere;
    justify-content: center;
    margin: 150px 40px 0px 40px;
    #circles {
      left: 0px;
      top: 1100px;
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 386px) {
    margin: 0px 24px;
    #circles {
      top: 1350px;
    }
  }
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-left: 90px;
  @media (max-width: 768px) {
    width: 30%;
    padding-left: 0px;
  }
  @media (max-width: 550px) {
    width: 40%;
  }
`
export const Descriptioncontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 15px;
  color: white;
  padding: 100px;
  z-index: 2;
  @media (max-width: 1050px) {
    padding: 0px 80px 50px 80px;
  }
  @media (max-width: 950px) {
    padding: 0px 35px 50px 35px;
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 60%;
  }
  @media (max-width: 386px) {
    padding: 17px;
  }
`

export const Title = styled.span`
  font-size: 56px;
  font-weight: bold;
  @media (max-width: 1050px) {
    font-size: 45px;
  }
  @media (max-width: 950px) {
    font-size: 40px;
  }
`
