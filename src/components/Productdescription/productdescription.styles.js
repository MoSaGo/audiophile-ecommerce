import styled from "styled-components"

export const Principalcontainer = styled.div`
  #desktop {
    display: flex;
  }
  #tablet {
    display: none;
  }
  #mobile {
    display: none;
  }
  @media (max-width: 768px) {
    #desktop {
      display: none;
    }
    #tablet {
      display: flex;
    }
    #mobile {
      display: none;
    }
  }
  @media (max-width: 386px) {
    #desktop {
      display: none;
    }
    #tablet {
      display: none;
    }
    #mobile {
      display: flex;
    }
  }
`
export const Productdescriptioncontainer = styled.div`
  display: flex;
  margin: 160px 165px;
  #buttoncontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 120px 39px 0px 39px;
    text-align: center;
  }
  @media (max-width: 386px) {
    margin: 64px 24px 0px 24px;
  }
`

export const Imagecontainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Infocontainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
  max-width: 445px;
  @media (max-width: 386px) {
    width: 100%;
  }
`
export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 34px;
  }
`

export const Isnew = styled.div`
  letter-spacing: 10px;
  font-size: 14px;
  text-transform: uppercase;
`
