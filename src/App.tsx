import React, { useState } from "react";
import {
  columnsInfo,
  mainMenu,
  socialMedia,
  userMenu,
  WEB_CREDITS,
  WEB_TITLE,
} from "./config";
import {
  LMCartProduct,
  LMColor,
  LMMainBarConfig,
  LMMainFooterConfig,
  LMProduct,
  LMUserInfo,
} from "./lib/types";
import { LMModal, LMBaseLayout, sendNotificationLM } from "./lib";
import { productAddedNoti } from "./msgs/notifications";
import LMProductCard from "./lib/LMProductCard/LMProductCard";
import model from "./model.webp";

const product: LMProduct = {
  id: "222",
  name: "Urban Jacket B&W",
  price: 12.45,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur0",
  details: [
    {
      key: "Cotton",
      value: "100%",
    },
    {
      key: "Machine",
      value: "40º",
    },
    {
      key: "Iron",
      value: "180º",
    },
  ],
  colors: [LMColor.Green, LMColor.Pink, LMColor.Red],
  unds: 10,
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
  console.log(model);
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
              sendNotificationLM(productAddedNoti);
            }}
          >
            Añadir
          </button>
          <button onClick={() => setModal(true)}>Modal</button>
        </div>
        <div style={{ width: "250px" }}>
          <LMProductCard
            img={model}
            product={product}
            onClickProduct={() => console.log('product')}
            onClickAdd={() => console.log("cart")}
            onClickFav={() => console.log("fav")}
          />
        </div>
        <div style={{ textAlign: "center", height: "1000px" }}>
          {/* <LMCarousel imgList={catImgs} width={1200} /> */}
        </div>
      </LMBaseLayout>
    </>
  );
};

export default App;
