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
  LMComment,
  LMFilterPropsSelected,
  LMMainBarConfig,
  LMMainFooterConfig,
  LMProduct,
  LMSize,
  LMUser,
  LMUserInfo,
  LMImgAttr,
  LMPathSegment,
} from "./lib/types";
import {
  LMModal,
  LMBaseLayout,
  sendNotificationLM,
  LMBaseComponent,
  LMFilter,
  LMImgProduct,
  LMRow,
  LMHeader,
} from "./lib";
import { productAddedNoti } from "./msgs/notifications";
import LMProductCard from "./lib/LMProductCard/LMProductCard";
import model from "./model.webp";
import model2 from "./model2.webp";
import model3 from "./model3.webp";
import avatar from "./avatar.jpeg";
import "./i18n";
import LMInput from "./lib/LMForm/LMInput/LMInput";
import { LMCheckBox } from "./lib/LMForm/LMCheckBox";
import { LMButton } from "./lib/LMButton";
import LMInfoProduct from "./lib/LMInfoProduct/LMInfoProduct";
import LMCommentCard from "./lib/LMCommentCard/LMCommentCard";
import LMBreadCrumb from "./lib/LMBreadCrumb/LMBreadCrumb";
import LMContainerFunc from "./lib/LMContainerFunc/LMContainerFunc";

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
  isFav: false,
};

const user: LMUser = {
  username: "Username",
  avatar: avatar,
  measures: {
    chest: 90,
    waist: 60,
    hip: 90,
    size: LMSize.XL,
  },
  email: "user@mail.com",
};

const imgList: LMImgAttr[] = [
  {
    key: "1",
    src: model,
    title: "Modelo de chaqueta",
    alt: "Una chaqueta muy bonita",
  },
  {
    key: "2",
    src: model2,
    title: "Modelo de chaqueta",
    alt: "Una chaqueta muy bonita",
  },
  {
    key: "3",
    src: model3,
    title: "Modelo de chaqueta",
    alt: "Una chaqueta muy bonita",
  },
];

const comment: LMComment = {
  id: "2",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  date: new Date(),
  ratting: 3,
  measures: {
    chest: 90,
    waist: 60,
    hip: 90,
    size: LMSize.XL,
  },
  user: user,
  imgs: imgList,
};

const cartProduct: LMCartProduct = {
  id: "1",
  unds: 1,
  product: product,
};

const userInfo: LMUserInfo = {
  lang: "en",
  cart: [cartProduct],
  user: user,
};

const path: LMPathSegment[] = [
  { name: "home", href: "", title: "" },
  { name: "section", href: "", title: "" },
  { name: "page", href: "", title: "" },
  { name: "product", href: "", title: "" },
];

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
    selectedListStyle: [],
  });

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
        <LMRow>
          <LMBaseComponent>
            <div style={{ display: "flex", gap: "20px" }}>
              <LMButton
                onClick={() => {
                  setUser({ ...user, cart: [...user.cart, cartProduct] });
                  sendNotificationLM(productAddedNoti);
                }}
              >
                Añadir
              </LMButton>
              <LMButton onClick={() => setModal(true)}>Modal</LMButton>
            </div>
          </LMBaseComponent>
        </LMRow>
        {/*
        <LMRow>
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
        </LMRow>

        <LMRow>
          <LMFilter
            selectedListColor={filterProps?.selectedListColor}
            onChangeListColor={(color) =>
              handleChangeListFilter<LMColor>(
                color,
                filterProps?.selectedListColor,
                "selectedListColor"
              )
            }
            selectedListSize={filterProps?.selectedListSize}
            onChangeListSize={(style) =>
              handleChangeListFilter<LMSize>(
                style,
                filterProps?.selectedListSize,
                "selectedListSize"
              )
            }
            minPrice={10}
            maxPrice={100}
            valMinPrice={filterProps?.valMinPrice}
            valMaxPrice={filterProps?.valMaxPrice}
            onChangeMinPrice={(min: number) =>
              setFilterProps({
                ...filterProps,
                valMinPrice: min,
              } as LMFilterPropsSelected)
            }
            onChangeMaxPrice={(max: number) =>
              setFilterProps({
                ...filterProps,
                valMaxPrice: max,
              } as LMFilterPropsSelected)
            }
            listStyle={["urban", "casual", "party", "gothic"]}
            selectedListStyle={filterProps?.selectedListStyle}
            onChangeListStyle={(style) =>
              handleChangeListFilter<string>(
                style,
                filterProps?.selectedListStyle,
                "selectedListStyle"
              )
            }
          />

          <LMImgProduct imgList={imgList} thumbList={imgList} />

          <LMInfoProduct
            product={product}
            onClickFav={(fav) => (product.isFav = fav)}
            onClickBuy={(buy) => console.log("compra: ", buy)}
          />
        </LMRow>
          */}

        <LMRow>
          <LMCommentCard comment={comment} userInfo={userInfo} />
        </LMRow>

        <LMBreadCrumb path={path} />
        <LMHeader
          title="Title"
          link={{ name: "back", href: "", title: "titulo" }}
        />
        <div>{/* <LMCarousel imgList={catImgs} width={1200} /> */}</div>
        <LMContainerFunc
          title="Title"
          btnsHeader={[
            {
              key: "test",
              name: "test",
              second: true,

              onClick: () => console.log("click top"),
            },
          ]}
          btnsFooter={[
            {
              key: "btn1",
              name: "btn1",
              onClick: () => console.log("click top"),
            },
          ]}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </LMContainerFunc>
      </LMBaseLayout>
    </>
  );
};

export default App;
