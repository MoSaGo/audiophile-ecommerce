import styled from "styled-components"
import Typography from "../../Typography"

export const CardNavigationContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.pallete.secondary.gray};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`

export const ImageContainer = styled.picture`
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img:nth-child(2) {
    position: absolute;
    top: 52px;
  }
`

export const Title = styled(Typography)`
  margin-block-start: 60px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const ButtonText = styled(Typography)`
  opacity: 0.5;
`
