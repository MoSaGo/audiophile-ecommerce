import React from "react"
import { Checkoutcontainer } from "./checkout.styles"
import Summary from "../../components/Summary"
import Data from "../../components/Data"

const Checkout = () => {
  return (
    <Checkoutcontainer>
      <Data />
      <Summary />
    </Checkoutcontainer>
  )
}

export default Checkout
