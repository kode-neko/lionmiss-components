import { useEffect } from "react";

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

export default useAddEvent;
