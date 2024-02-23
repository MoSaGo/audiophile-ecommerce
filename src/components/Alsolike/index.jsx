import React from "react"
import { Alsolikecontainer, Principalcontainer, Title } from "./alsolike.styles"
import Cardalsolike from "./Cardalsolike"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const Alsolike = () => {
  const { id } = useParams()
  const productState = useSelector((store) => store.products)
  const data = productState.products
  const product = data.find((item) => item.id === Number(id))
  const likeproducts = []
  likeproducts[0] = data.find((item) => item.slug === product.others[0].slug)
  likeproducts[1] = data.find((item) => item.slug === product.others[1].slug)
  likeproducts[2] = data.find((item) => item.slug === product.others[2].slug)

  return (
    <Principalcontainer>
      <Title>you may also like</Title>
      <Alsolikecontainer>
        <Cardalsolike
          image={product.others[0].image.desktop}
          name={product.others[0].name}
          id={likeproducts[0].id}
        />
        <Cardalsolike
          image={product.others[1].image.desktop}
          name={product.others[1].name}
          id={likeproducts[1].id}
        />
        <Cardalsolike
          image={product.others[2].image.desktop}
          name={product.others[2].name}
          id={likeproducts[2].id}
        />
      </Alsolikecontainer>
    </Principalcontainer>
  )
}

export default Alsolike
