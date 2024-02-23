import React from "react"
import Button from "@components/Button"
import { Link } from "react-router-dom"
import { Cardalsolikecontainer, Title } from "./cardalsolike.styles"

const Cardalsolike = (props) => {
  const { image, name, id, ...rest } = props
  const link = "/product-details/" + id
  return (
    <Cardalsolikecontainer>
      <img style={{ width: "100%", borderRadius: "10px" }} src={image} alt="" />
      <br />
      <Title>{name}</Title>
      <br />
      <Link style={{ color: "white", textDecoration: "none" }} to={link}>
        <div>
          <Button text="see product" variant="primary" />
        </div>
      </Link>
    </Cardalsolikecontainer>
  )
}

export default Cardalsolike
