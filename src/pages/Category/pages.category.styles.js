import styled from "styled-components"
import Typography from "@components/Typography"

export const Title = styled(Typography)`
  background-color: ${(props) => props.theme.pallete.neutrals.black};
  color: ${(props) => props.theme.pallete.neutrals.white};
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
