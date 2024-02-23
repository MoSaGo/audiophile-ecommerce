import React, { Children, useState } from "react"
import {
  Amountcontainer,
  Minuscontainer,
  Numbercontainer,
  Pluscontainer,
} from "./amount.styles"
import { useDispatch, useSelector } from "react-redux"
import {
  addProducts,
  minustempquantity,
  plustempquantity,
  removeProducts,
  tempquantity,
} from "../../redux/feactures/cart/cartSlice"

const Amount = (props) => {
  const cartState = useSelector((store) => store.cart)
  const { cartnumber, product, ...rest } = props
  let number = 1
  if (cartnumber) {
    number = cartnumber
  }
  const [counter, setCounter] = useState(number)
  const dispatch = useDispatch()

  return (
    <Amountcontainer>
      <Minuscontainer
        onClick={() => {
          if (counter > 1) {
            setCounter(counter - 1)
            cartnumber && dispatch(removeProducts({ product, count: 1 }))
            !cartnumber && dispatch(minustempquantity())
          }
        }}
      >
        -
      </Minuscontainer>
      <Numbercontainer>{counter}</Numbercontainer>
      <Pluscontainer
        onClick={() => {
          setCounter(counter + 1)
          cartnumber && dispatch(addProducts({ product, count: 1 }))
          !cartnumber && dispatch(plustempquantity())
        }}
      >
        +
      </Pluscontainer>
    </Amountcontainer>
  )
}

export default Amount
