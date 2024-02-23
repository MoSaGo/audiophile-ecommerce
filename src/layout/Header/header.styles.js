import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.pallete.main.black};
  padding: 34px 165px;
  color: ${(props) => props.theme.pallete.neutrals.white};
  gap: 42px;
  #burguer {
    display: none;
  }
  @media (max-width: 909px) {
    padding: 30px 130px;
  }
  @media (max-width: 768px) {
    padding: 32px 39px;
    #navbar {
      display: none;
    }
    #burguer {
      display: block;
    }
  }
`

export const Menucontainer = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
  left: 0;
  height: 340px;
  z-index: 6;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  @media (max-width: 386px) {
    top: 90px;
    padding-top: 400px;
  }
`
