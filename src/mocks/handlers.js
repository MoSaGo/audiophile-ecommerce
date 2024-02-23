import { http, HttpResponse } from "msw"
import products from "./database"

const handlers = [
  http.get("/products", () => {
    return HttpResponse.json({ data: products })
  }),

  /*
  http.get("/product/:id", async (request, response, ctx) => {
    const { id } = await request.json()
    return response(
      ctx.json({
        data: products.find((item, index, arr) => {
          return products.id === id
        }),
      }),
    )
  }),*/
]
export default handlers
