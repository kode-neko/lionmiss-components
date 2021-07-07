import React from "react";
import cat01 from "./cat01.jpg";
import "./App.css";
import LMCarousel, { ImgCarousel } from "./lib/LMCarousel";
import LMMainBar from "./lib/LMMainBar/LMMainBar";
import "./lib/icons";
import "./lib/i18n"

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

const App = (): React.FunctionComponentElement<unknown> => {
  return (
    <div className="App">
      <LMMainBar />
      <LMCarousel imgList={catImgs} width={1200} />;
    </div>
  );
};

export default App;
