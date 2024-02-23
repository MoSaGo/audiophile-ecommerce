import styled from "styled-components"

export const Datacontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  color: #d87d4a;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  background-color: white;
  padding: 54px 48px;
  Billingcontainer > div {
    width: 50%;
  }
  #address {
    width: 100%;
  }
  #zip-city > div {
    width: 50%;
  }
  #emon-enum > div {
    width: 50%;
  }
  #money-pin > div {
    width: 50%;
  }
  #country {
    width: 50%;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 54px 0px;
  }
  @media (max-width: 386px) {
    flex-direction: column;
    #address {
      width: 95%;
    }
    #zip-city {
      flex-direction: column;
    }
    #zip-city > div {
      width: 100%;
    }
    #country {
      width: 100%;
    }
    #money-pin {
      flex-direction: column;
    }
    #money-pin > div {
      width: 90%;
    }
    #emon-enum {
      flex-direction: column;
    }
    #emon-enum > div {
      width: 100%;
    }
    Billingcontainer > div {
      width: 100%;
    }
  }
`

export const Billingcontainer = styled.div`
  display: flex;
  color: black;
  width: 100%;
  text-transform: capitalize;
  @media (max-width: 386px) {
    flex-direction: column;
  }
`

export const Shippingcontainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  text-transform: capitalize;
  @media (max-width: 386px) {
    flex-direction: column;
  }
`

export const Paymentcontainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  text-transform: capitalize;
  @media (max-width: 386px) {
    flex-direction: column;
  }
`

export const Emoneycontainer = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  border: 1px solid black;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #d87d4a;
  cursor: pointer;
`
export const Cashcontainer = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  border: 1px solid black;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #d87d4a;
  cursor: pointer;
`
export const Circlecontainer = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  margin-right: 16px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.div`
  height: 10px;
  width: 10px;
  background-color: #d87d4a;
  border-radius: 100%;
`
