import React, { useState } from "react"
import {
  Amountcontainer,
  Imagecontainer,
  Productmincontainer,
  Productscontainer,
  Summarycontainer,
  Textcontainer,
  Titlecontainer,
} from "./summary.styles"
import { useDispatch, useSelector } from "react-redux"
import Button from "@components/Button"
import Modal from "@components/Modal"

const Summary = () => {
  const cartState = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const [isvisible, setisVisible] = useState(false)

  function Editname(productname) {
    let name = productname[0] + productname[1] + productname[2] + productname[3]
    return name
  }
  return (
    <Summarycontainer>
      <Titlecontainer>
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Summary</span>
      </Titlecontainer>

      {cartState.products.map((item) => {
        return (
          <Productscontainer key={item.id}>
            <Productmincontainer>
              <Imagecontainer>
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src={item.product.image.desktop}
                />
              </Imagecontainer>
              <Textcontainer>
                <span style={{ fontWeight: "bold" }}>
                  {Editname(item.product.name)}
                </span>
                <span style={{ color: "gray", fontWeight: "bold" }}>
                  ${item.product.price}
                </span>
              </Textcontainer>
            </Productmincontainer>
            <Amountcontainer>x{item.count}</Amountcontainer>
          </Productscontainer>
        )
      })}

      <Titlecontainer>
        <span style={{ color: "gray", fontWeight: "bold" }}>Total</span>
        <span style={{ fontWeight: "bold" }}>${cartState.subtotal}</span>
      </Titlecontainer>
      <Titlecontainer>
        <span style={{ color: "gray", fontWeight: "bold" }}>Shipping</span>
        <span style={{ fontWeight: "bold" }}>${cartState.shipping}</span>
      </Titlecontainer>
      <Titlecontainer>
        <span style={{ color: "gray", fontWeight: "bold" }}>Vat</span>
        <span style={{ fontWeight: "bold" }}>${cartState.vat}</span>
      </Titlecontainer>
      <Titlecontainer>
        <span style={{ color: "gray", fontWeight: "bold" }}>Grand total</span>
        <span style={{ fontWeight: "bold" }}>${cartState.total}</span>
      </Titlecontainer>
      {!cartState.ready && <Button text="continue and pay" variant="primary" />}

      {cartState.ready && (
        <Button
          onClick={() => {
            setisVisible(true)
          }}
          text="continue and pay"
          variant="primary"
        />
      )}
      {isvisible && cartState.total > 0 && <Modal />}
    </Summarycontainer>
  )
}

export default Summary
