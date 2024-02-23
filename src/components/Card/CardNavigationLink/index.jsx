import React from "react"
import {
  CardNavigationContainer,
  ImageContainer,
  ButtonText,
  Title,
} from "./card.navigation.link.styles"
import Button from "../../Button"
import Typography from "../../Typography"
import { Link } from "react-router-dom"

const CardNavigationLink = (props) => {
  const { image, title, category, ...rest } = props
  return (
    <CardNavigationContainer {...rest}>
      <ImageContainer>
        <img style={{ width: "100%" }} src={image} alt="" />
        <img style={{ width: "100%" }} src="/images/Oval-Copy.png" alt="" />
      </ImageContainer>

      <Title>{title}</Title>
      <Link style={{ color: "white", textDecoration: "none" }} to={category}>
        <Button whitArrow>
          <ButtonText variant="subtitle">shop</ButtonText>
        </Button>
      </Link>
    </CardNavigationContainer>
  )
}

export default CardNavigationLink
