import { useEffect, useState, useRef } from "react";
import { ImgCarousel, StyleWidth, useKNCarouselData } from "./types";

const createValueWidth = (imgWidth: StyleWidth, multiply = 1): string =>
  `${imgWidth.cont * multiply}${imgWidth.units}`;

const useKNCarousel = (
  imgList: ImgCarousel[],
  width: number | undefined
): useKNCarouselData => {
  const [index, _setIndex] = useState<number>(0);
  const indexeRef = useRef(index);
  const setIndex = (data: number) => {
    indexeRef.current = data;
    _setIndex(data);
  };
  const [imgWidth, setImgWidth] = useState<StyleWidth>({
    cont: width ? width : 100,
    units: width ? "px" : "vw",
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-imgWidth: ${createValueWidth(imgWidth)})`
    );
    const listener = (event: MediaQueryListEvent) => {
      let newWidth: StyleWidth = { cont: imgWidth.cont, units: "px" };
      if (event.matches) newWidth = { cont: 100, units: "vw" };
      setImgWidth(newWidth);
      event.stopPropagation();
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickArrow = (index: number) => {
    let auxIndex = index;
    if (index > imgList.length - 1) auxIndex = 0;
    else if (index < 0) auxIndex = imgList.length - 1;
    setIndex(auxIndex);
  };

  const onClickLeft = () => handleOnClickArrow(index - 1);
  const onClickRight = () => handleOnClickArrow(index + 1);
  const onClickPage = (index: number) => handleOnClickArrow(index);

  return [
    index,
    createValueWidth(imgWidth),
    onClickLeft,
    onClickRight,
    onClickPage,
  ];
};

export { useKNCarousel, createValueWidth };