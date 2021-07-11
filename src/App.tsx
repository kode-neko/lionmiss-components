import React, { useState } from "react";
import cat01 from "./cat01.jpg";
import LMCarousel, { ImgCarousel } from "./lib/LMCarousel";
import LMMainBar from "./lib/LMMainBar/LMMainBar";
import { WEB_TITLE, mainMenu, userMenu } from "./constants";
import { LMCartProduct, LMProduct, LMUserInfo } from "./lib/types";
import "./App.css";
import "./lib/icons";
import "./lib/i18n";
import { LMModal } from "./lib/LMModal";

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
      <div className="App">
        <LMMainBar
          webTitle={WEB_TITLE}
          mainMenu={mainMenu}
          userMenu={userMenu}
          userInfo={user}
          onSearch={() => console.log("buscar")}
        />
        <LMCarousel imgList={catImgs} width={1200} />;
        <button
          onClick={() =>
            setUser({ ...user, cart: [...user.cart, cartProduct] })
          }
        >
          Añadir
        </button>
        <button onClick={() => setModal(true)}>Modal</button>
      </div>
    </>
  );
};

export default App;
