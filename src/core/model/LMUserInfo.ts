import { LMCart } from "./LMCart";
import { LMUser } from "./LMUser";

type LMUserInfo = {
  lang: string;
  currency: string;
  cart: LMCart;
  user: LMUser;
};

export { LMUserInfo };
