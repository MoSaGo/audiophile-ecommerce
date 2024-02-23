import styled from "styled-components"

export const Thirdcardcontainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 0px 165px 48px 165px;
  @media (max-width: 768px) {
    margin: 32px 39px;
    gap: 11px;
  }
  @media (max-width: 386px) {
    margin: 24px;
    gap: 24px;
    flex-direction: column;
  }
`

export const Infocontainer = styled.div`
  background-color: #f1f1f1;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 10px;
  padding-left: 100px;
  #button {
    width: 180px;
    margin-top: 20px;
  }
  @media (max-width: 950px) {
    padding-left: 51px;
    #button {
      margin-top: 0px;
    }
  }
  @media (max-width: 850px) {
    padding-left: 20px;
    font-size: 23px;
  }
  @media (max-width: 768px) {
    padding-left: 41px;
    #button {
      margin-top: 20px;
    }
  }
  @media (max-width: 550px) {
    padding-left: 10px;
    #button {
      margin-top: 0px;
      width: 170px;
    }
  }
  @media (max-width: 440px) {
    #button {
      width: 120px;
    }
  }
  @media (max-width: 386px) {
    width: 100%;
    height: 200px;
    #button {
      width: 180px;
      margin-top: 20px;
    }
    padding: 24px;
  }
`
export const Imagecontainer = styled.div`
  width: 50%;
  #imagetablet {
    display: none;
  }
  #imagemobile {
    display: none;
  }
  @media (max-width: 768px) {
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
    width: 100%;
    #imagetablet {
      display: none;
    }
    #imagedesktop {
      display: none;
    }
    #imagemobile {
      display: flex;
    }
  }
`
