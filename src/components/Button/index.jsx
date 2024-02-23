import React from "react"
import Typography from "../Typography"
import { ButtonContainer } from "./button.styles"
import Flex from "../Flex"

export const Button = (props) => {
  const { text, children, whitArrow, variant, ...rest } = props
  return (
    <ButtonContainer whitArrow={whitArrow} variant={variant} {...rest}>
      {document.documentElement.scrollTo(0, 0)}
      <Flex gap={6}>
        <Typography as="span" variant="subtitle">
          {text ?? children}
        </Typography>
        {whitArrow && (
          <span>
            <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
          </span>
        )}
      </Flex>
    </ButtonContainer>
  )
}

export default Button
