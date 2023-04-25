import {faker} from '@faker-js/faker'
import {measures} from './measures';
import {user} from './user';
import {modelPurpleImgList} from './img'
import { LMComment } from 'lionmiss-core';

const comment: LMComment = {
  _id: faker.database.mongodbObjectId(),
  comment: faker.lorem.paragraph(),
  date: new Date(),
  ratting: 3,
  measures: measures,
  user: user,
  imgs: modelPurpleImgList
}

export {comment}
