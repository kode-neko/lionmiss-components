import { LMCart, LMCartProduct, LMColor, LMSize } from "lionmiss-core";
import {faker} from '@faker-js/faker';
import {product} from './product';

const cartProduct: LMCartProduct = {
  _id: faker.database.mongodbObjectId(),
  size: LMSize.M,
  color: LMColor.Pink,
  unds: 2,
  product
}

const cart: LMCart = {
  _id: faker.database.mongodbObjectId(),
  products: [cartProduct],
  taxes: 21
}

export {
  cartProduct,
  cart
}