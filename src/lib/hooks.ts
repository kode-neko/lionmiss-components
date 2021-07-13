import { useState, useEffect, useRef } from "react";

function useDisplay(widthDisplay: number): boolean | undefined {
  const ref = useRef(null);
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

function useAddEvent<T extends HTMLElement>(
  refElement: React.RefObject<T>,
  eventName: string,
  handler: (e: Event) => void
): void {
  useEffect(() => {
    const ele = refElement.current;
    ele?.addEventListener(eventName, handler);
    return () => {
      ele?.removeEventListener(eventName, handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { useDisplay, useAddEvent };
