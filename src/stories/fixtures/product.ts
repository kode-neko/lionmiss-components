import { LMColor, LMProduct } from "lionmiss-core"
import {faker} from '@faker-js/faker'

const product: LMProduct = {
  name: faker.commerce.product(),
  price: Number(faker.commerce.price()),
  description: faker.commerce.productDescription(),
  details: [],
  colors: [LMColor.Red, LMColor.Blue, LMColor.Green],
  unds: Number(faker.random.numeric()),
  imgs: []
}

export {
  product
}