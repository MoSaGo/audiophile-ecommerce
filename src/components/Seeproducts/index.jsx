import React from "react"
import { Seeproductcontainer, Divs } from "./seeproducts.styles"
import CardNavigationLink from "../Card/CardNavigationLink"
import { Link } from "react-router-dom"

const Seeproducts = (props) => {
  const { ...rest } = props
  return (
    <Seeproductcontainer>
      <Divs>
        <CardNavigationLink
          title="Headphones"
          image="/assets/menu/headphone.png"
          category="/category/headphones"
        />
      </Divs>
      <Divs>
        <CardNavigationLink
          title="earphones"
          image="/assets/menu/earphone.png"
          category="/category/earphones"
        />
      </Divs>
      <Divs>
        <CardNavigationLink
          title="speakers"
          image="/assets/menu/speaker.png"
          category="/category/speakers"
        />
      </Divs>
    </Seeproductcontainer>
  )
}

export default Seeproducts
