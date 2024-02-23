import styled from "styled-components"

export const Modalcontainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 398;
  body {
    overflow-y: hidden;
    overflow-x: hidden;
  }
`

export const Thankscontainer = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 48px;
  border-radius: 7px;
  align-items: start;
  width: 454px;
  z-index: 400;
`

export const Titlecontainer = styled.div`
  font-size: 36px;
  font-weight: bold;
`
export const Subtitlecontainer = styled.div`
  font-size: 15px;
  text-transform: initial;
  color: gray;
`

export const Productscontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 55%;
  background-color: #f1f1f1;
  color: gray;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const Midcontainer = styled.div`
  display: flex;
  width: 100%;
`

export const Totalcontainer = styled.div`
  background-color: black;
  width: 45%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  text-transform: capitalize;
  font-size: 15px;
  flex-direction: column;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const Line = styled.div`
  height: 0.5px;
  width: 100%;
  background-color: gray;
`
