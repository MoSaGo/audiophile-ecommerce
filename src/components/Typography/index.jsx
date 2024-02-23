import React from "react"
import { TypoghraphyStyled } from "./typography.styles"

const Typography = (props) => {
  const { children, variant = "body", ...rest } = props

  return (
    <TypoghraphyStyled variant={variant} {...rest}>
      {children}
    </TypoghraphyStyled>
  )
}

export default Typography
