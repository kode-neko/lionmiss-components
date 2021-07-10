import React from "react";
import cat01 from "./cat01.jpg";
import LMCarousel, { ImgCarousel } from "./lib/LMCarousel";
import LMMainBar from "./lib/LMMainBar/LMMainBar";
import { WEB_TITLE, mainMenu, userMenu } from "./constants";
import { LMCart, LMUserInfo } from "./lib/types";
import "./App.css";
import "./lib/icons";
import "./lib/i18n";

const catImgs: ImgCarousel[] = [
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat01,
    alt: "desc",
  },
];

const cart: LMCart = {
  id: '666',
  items: [],
};

const userInfo: LMUserInfo = {
  lang: "en",
  cart: cart,
};

const App = (): React.FunctionComponentElement<unknown> => {
  return (
    <div className="App">
      <LMMainBar
        webTitle={WEB_TITLE}
        mainMenu={mainMenu}
        userMenu={userMenu}
        userInfo={userInfo}
      />
      <LMCarousel imgList={catImgs} width={1200} />;
    </div>
  );
};

export default App;
