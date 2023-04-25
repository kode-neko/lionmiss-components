import { LMImg } from "lionmiss-core";
import {faker} from '@faker-js/faker';
import {
    black01,
    purple0101,
    purple0102,
    purple0103,
    purple0104
  } from '../../stories/assets/clothes'

const modelBlackImg: LMImg = {
  _id: faker.database.mongodbObjectId(),
  src: black01
}

const modelPurpleList: string[] = [
  purple0101,
  purple0102,
  purple0103,
  purple0104
]

const modelPurpleImgList: LMImg[] = modelPurpleList.map((img: string, index: number) => ({
  _id: faker.database.mongodbObjectId(),
  src: img,
  main: index === 0
})); 

export {
  modelBlackImg,
  modelPurpleImgList
}