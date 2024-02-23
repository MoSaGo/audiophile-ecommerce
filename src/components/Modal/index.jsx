import React from "react"
import { createPortal } from "react-dom"
import {
  Line,
  Midcontainer,
  Modalcontainer,
  Productcontainer,
  Productscontainer,
  Subtitlecontainer,
  Thankscontainer,
  Titlecontainer,
  Totalcontainer,
} from "./modal.styles"
import { Link } from "react-router-dom"
import Button from "@components/Button"
import { useDispatch, useSelector } from "react-redux"
import { removeAll } from "../../redux/feactures/cart/cartSlice"

const Modal = () => {
  const cartState = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  function Redname(name) {
    var newname = " "
    let word = "speakers"

    for (var i = 0; i < name.length; i++) {
      newname += name[i]
      if (name[i] === " ") {
        var validar = " "
        for (var a = 1; a < name.length; a++) {
          validar += name[i + a]
          if (name[i + a] === " ") {
            a = name.length
          }
        }
        if (validar.length > word.length) {
          i = name.length
        }
      }
    }
    return newname
  }
  return (
    <Modalcontainer>
      <Thankscontainer>
        <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
        <br />
        <Titlecontainer>THANK YOU FOR YOUR ORDER</Titlecontainer>
        <br />
        <Subtitlecontainer>
          You will receive an email confirmation shortly.
        </Subtitlecontainer>
        <br />
        <Midcontainer>
          <Productscontainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <div>
                <img
                  style={{ height: "32px" }}
                  src={cartState.products[0].product.image.desktop}
                  alt=""
                />
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "65%",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {Redname(cartState.products[0].product.name)}
                </span>
                <span>${cartState.products[0].product.price}</span>
              </div>
              <div>x{cartState.products[0].count}</div>
            </div>
            <br />
            <Line></Line>

            <div>
              {cartState.products.length > 1 && (
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                  and {cartState.products.length - 1} other item(s)
                </span>
              )}
            </div>
          </Productscontainer>

          <Totalcontainer>
            <span>grand total</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              ${cartState.total}
            </span>
          </Totalcontainer>
        </Midcontainer>
        <br />
        <div style={{ width: "100%" }}>
          <Link
            style={{ color: "white", textDecoration: "none", with: "100%" }}
            to="/"
          >
            <Button
              onClick={() => dispatch(removeAll())}
              text="back to home"
              variant="primary"
            />
          </Link>
        </div>
      </Thankscontainer>
    </Modalcontainer>
  )
}

export default Modal
