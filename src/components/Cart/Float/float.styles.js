import styled from "styled-components"

export const Floatcontainer = styled.div`
  position: absolute;
  color: orange;
  font-size: 17px;
  font-weight: bold;
  right: 180px;
  top: 15px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 909px) {
    right: 150px;
  }
  @media (max-width: 768px) {
    right: 55px;
  }
`
