import { LMMeasures } from "lionmiss-core"
import {faker} from '@faker-js/faker'

const measures: LMMeasures = {
  chest: Number(faker.random.numeric(2)),
  waist: Number(faker.random.numeric(2)),
  hip: Number(faker.random.numeric(2))
}

export {
  measures
}