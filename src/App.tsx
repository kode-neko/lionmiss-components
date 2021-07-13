import React, { useState } from "react";
import cat01 from "./cat01.jpg";
import LMCarousel, { ImgCarousel } from "./lib/LMCarousel";
import {
  WEB_TITLE,
  mainMenu,
  userMenu,
  WEB_CREDITS,
  columnsInfo,
  socialMedia,
} from "./constants";
import { LMCartProduct, LMMainBarConfig, LMMainFooterConfig, LMProduct, LMUserInfo } from "./lib/types";
import "./App.css";
import "./lib/icons";
import "./lib/i18n";
import { LMModal } from "./lib/LMModal";
import { LMBaseLayout } from "./lib/LMBaseLayout";
import { LMMainBarProps } from "./lib/LMMainBar/types";
import { LMMainFooterProps } from "./lib/LMMainFooter/types";
import { LMNotificationProps } from "./lib/LMNotification/types";
import { tshirtLMIcon } from "./lib/LMIcons";
import { notProductAddedLM, sendNotificationLM } from "./lib/LMNotification";

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

const product: LMProduct = {
  id: "1",
  name: "",
  price: 0,
  description: "",
  details: [],
  unds: 1,
};

const cartProduct: LMCartProduct = {
  id: "1",
  unds: 1,
  product: product,
};

const userInfo: LMUserInfo = {
  lang: "en",
  cart: [cartProduct],
};

const App = (): React.FunctionComponentElement<unknown> => {
  const [user, setUser] = useState<LMUserInfo>(userInfo);
  const [modal, setModal] = useState<boolean>(false);

  const mainBarProps: LMMainBarConfig = {
    webTitle: WEB_TITLE,
    mainMenu: mainMenu,
    userMenu: userMenu,
    userInfo: user,
    columnsInfo: columnsInfo,
    socialMedia: socialMedia,
    onSearch: () => console.log("buscar"),
  };
  const mainFooter: LMMainFooterConfig = {
    columnsInfo: columnsInfo,
    socialMedia: socialMedia,
    credits: WEB_CREDITS,
  };

  return (
    <>
      <LMModal
        visible={modal}
        title="Title"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        }
        ok="Accept"
        cancel="Cancel"
        onClickOk={() => console.log("ok")}
        onClickCancel={() => console.log("cancel")}
        onClickClose={() => {
          console.log("cerrar");
          setModal(false);
        }}
      />
      <LMBaseLayout mainMenu={mainBarProps} mainFooter={mainFooter}>
        <div>
          <button
            onClick={() => {
              setUser({ ...user, cart: [...user.cart, cartProduct] });
              sendNotificationLM(notProductAddedLM);
            }}
          >
            Añadir
          </button>
          <button onClick={() => setModal(true)}>Modal</button>
        </div>
        <div style={{ textAlign: "center", height: "1000px" }}>
          {/* <LMCarousel imgList={catImgs} width={1200} /> */}
        </div>
      </LMBaseLayout>
    </>
  );
};

export default App;
