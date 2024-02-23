import React from "react"
import {
  Buttoncontainer,
  Floatcontainer,
  Fproductcontainer,
  NeW,
  Paragraph,
  Title,
} from "./fproduct.styles"
import Button from "../Button"
import { Link } from "react-router-dom"

const imagedesktop = "/assets/home/desktop/image-hero.jpg"
const imagetablet = "/assets/home/tablet/image-hero.jpg"
const imagemobile = "/assets/home/mobile/image-hero.jpg"
const Fproduct = (props) => {
  const { link, ...rest } = props

  return (
    <Fproductcontainer>
      <div id="imagefordesktop">
        <img style={{ width: "100%" }} src={imagedesktop} alt="" />
      </div>
      <div id="imagefortablet">
        <img style={{ width: "100%" }} src={imagetablet} alt="" />
      </div>
      <div id="imageformobile">
        <img style={{ width: "100%" }} src={imagemobile} alt="" />
      </div>

      <Floatcontainer>
        <NeW>New product</NeW>
        <Title>XX99 Mark II Headphones</Title>
        <Paragraph>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Paragraph>
        <Link style={{ color: "white", textDecoration: "none" }} to={link}>
          <Buttoncontainer>
            <Button text="see product" variant="primary" />
          </Buttoncontainer>
        </Link>
      </Floatcontainer>
    </Fproductcontainer>
  )
}

export default Fproduct
