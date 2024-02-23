import styled from "styled-components"

export const Containerdesktop = styled.div`
  background-color: ${({ theme }) => theme.pallete.neutrals.black};
  color: ${({ theme }) => theme.pallete.neutrals.white};
  padding: 75px 165px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: none;
  }
`
export const Containertablet = styled.div`
  background-color: ${({ theme }) => theme.pallete.neutrals.black};
  color: ${({ theme }) => theme.pallete.neutrals.white};
  padding: 75px 165px;
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  #nav {
    width: 430px;
  }
  #logos {
    display: flex;
    justify-content: space-between;
  }
  #logos > div {
    width: 45%;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
  @media (max-width: 768px) {
    padding: 60px 39px;
  }
  @media (max-width: 450px) {
    padding: 60px 39px;
    #nav {
      width: 350px;
    }
  }
  @media (max-width: 386px) {
    padding: 52px 24px;
    align-items: center;
    justify-content: center;
    #logos {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 48px;
    }
    #logos > div {
      width: 100%;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`
export const Divs = styled.div`
  padding: 0%;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
