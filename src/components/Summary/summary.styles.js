import styled from "styled-components"

export const Summarycontainer = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  text-transform: uppercase;
  @media (max-width: 960px) {
    width: 100%;
  }
`
export const Containercontainer = styled.div`
  position: absolute;
  right: 200px;
  top: 20px;
  font-size: 15px;
  color: black;
  background-color: white;
  border-radius: 10px;
  padding: 31px;
  width: 315px;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const Titlecontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Productscontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0px;
`
export const Productmincontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
`

export const Textcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`

export const Amountcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 32px;
  font-size: 15px;
  font-weight: bold;
`
