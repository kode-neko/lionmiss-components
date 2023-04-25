import { LMUser, LMUserInfo } from "lionmiss-core";
import { measures } from "./measures";
import { cart } from "./cart";
import {avatar01} from '../../stories/assets/avatar';
import {faker} from '@faker-js/faker'

const userInfo: LMUserInfo = {
  cart,
  favProducts: [],
  avatar: avatar01,
  lang: "en",
  currency: "eur",
  measures,
  email: faker.internet.email(),
  addresses: []
};

const user: LMUser = {
  _id: faker.database.mongodbObjectId(),
  username: faker.internet.userName(),
  pass: "",
  userInfo: userInfo
}

export {
  userInfo,
  user
}