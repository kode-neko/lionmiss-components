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
  LMFilterPropsSelected,
  LMMainBarConfig,
  LMMainFooterConfig,
  LMProduct,
  LMSize,
  LMUserInfo,
} from "./lib/types";
import {
  LMModal,
  LMBaseLayout,
  sendNotificationLM,
  LMBaseComponent,
  LMFilter,
} from "./lib";
import { productAddedNoti } from "./msgs/notifications";
import LMProductCard from "./lib/LMProductCard/LMProductCard";
import model from "./model.webp";
import "./i18n";
import LMInput from "./lib/LMForm/LMInput/LMInput";
import LMCheckBox from "./lib/LMForm/LMCheckbox/LMCheckbox";
import LMButton from "./lib/LMMainBar/LMButton/LMButton";

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

  const [w, setw] = useState<boolean>(false);

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

  const [filterProps, setFilterProps] = useState<LMFilterPropsSelected>({
    selectedListColor: [],
    selectedListSize: [],
    valMinPrice: 0,
    valMaxPrice: 100,
    selectedListStyle: []
  });

  const handleChangeListColor = (color: LMColor) => {
    const { selectedListColor: list } = filterProps as LMFilterPropsSelected;
    const finded = list.find((ele) => ele === color);
    const newListColor = finded
      ? list.filter((ele) => ele !== color)
      : [...list, color];
    setFilterProps({
      ...filterProps,
      selectedListColor: newListColor,
    } as LMFilterPropsSelected);
  };

  const handleChangeListSize = (size: LMSize) => {
    const { selectedListSize: list } = filterProps as LMFilterPropsSelected;
    const finded = list.find((ele) => ele === size);
    const newListSize = finded
      ? list.filter((ele) => ele !== size)
      : [...list, size];
    setFilterProps({
      ...filterProps,
      selectedListSize: newListSize,
    } as LMFilterPropsSelected);
  };

  const handleChangeListStyle = (style: string) => {
    const { selectedListStyle: list } = filterProps as LMFilterPropsSelected;
    const finded = list.find((ele) => ele === style);
    const newListStyle = finded
      ? list.filter((ele) => ele !== style)
      : [...list, style];
    setFilterProps({
      ...filterProps,
      selectedListStyle: newListStyle,
    } as LMFilterPropsSelected);
  };

  const handleChangeListFilter = <T,>(value: T, list: T[], param: string) => {
    const finded = list.find((ele) => ele === value);
    const newListStyle = finded
      ? list.filter((ele) => ele !== value)
      : [...list, value];
    setFilterProps({
      ...filterProps,
      [param]: newListStyle,
    } as LMFilterPropsSelected);
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
        <LMBaseComponent>
          <LMButton
            onClick={() => {
              setUser({ ...user, cart: [...user.cart, cartProduct] });
              sendNotificationLM(productAddedNoti);
            }}
          >
            Añadir
          </LMButton>
          <LMButton onClick={() => setModal(true)}>Modal</LMButton>
        </LMBaseComponent>

        <LMProductCard
          img={model}
          product={product}
          onClickProduct={() => console.log("product")}
          onClickAdd={() => console.log("cart")}
          onClickFav={() => console.log("fav")}
        />

        <LMBaseComponent>
          <div>
            <LMInput
              label="Title"
              placeholder="patatas"
              infoHint="Please don’t exced 50 characters"
            />
            <LMCheckBox
              value="patatas"
              label="label"
              checked={w}
              id="confeti"
              onChange={() => setw(!w)}
            />
          </div>
        </LMBaseComponent>

        <LMFilter
          selectedListColor={filterProps?.selectedListColor}
          onChangeListColor={handleChangeListColor}
          selectedListSize={filterProps?.selectedListSize}
          onChangeListSize={handleChangeListSize}
          minPrice={10}
          maxPrice={100}
          valMinPrice={filterProps?.valMinPrice}
          valMaxPrice={filterProps?.valMinPrice}
          onChangeMinPrice={(min: number) =>
            setFilterProps({
              ...filterProps,
              minPrice: min,
            } as LMFilterPropsSelected)
          }
          onChangeMaxPrice={(max: number) =>
            setFilterProps({
              ...filterProps,
              maxPrice: max,
            } as LMFilterPropsSelected)
          }
          listStyle={["urban", "casual", "party", "gothic"]}
          selectedListStyle={filterProps?.selectedListStyle}
          onChangeListStyle={(style) =>
            handleChangeListFilter<string>(
              style,
              filterProps?.selectedListColor as string[],
              "selectedListColor"
            )
          }
        />

        <div>{/* <LMCarousel imgList={catImgs} width={1200} /> */}</div>
      </LMBaseLayout>
    </>
  );
};

export default App;
