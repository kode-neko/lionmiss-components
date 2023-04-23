import { useState, useEffect } from "react";

function useDisplay(widthDisplay: number): boolean | undefined {
  const [isResponsive, setIsResponsive] = useState<boolean>();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${widthDisplay}px)`);
    const listener = (event: MediaQueryListEvent) => {
      setIsResponsive(event.matches);
      event.stopPropagation();
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isResponsive;
}

export default useDisplay;
