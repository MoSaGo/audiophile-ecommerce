import React, { Children } from "react"
import { FlexContainer } from "./flex.styles"

const Flex = (props) => {
  const { justify = "center", align = "center", gap = 0, children } = props

  return (
    <FlexContainer justify={justify} align={align} gap={gap}>
      {children}
    </FlexContainer>
  )
}

export default Flex
