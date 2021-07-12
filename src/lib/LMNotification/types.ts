import React from "react";

type LMNotificationProps = {
  title?: string;
  icon: JSX.Element;
  msg: string;
};

interface LMNotificationPropsPlus extends LMNotificationProps {
  key: number;
  ref?: React.RefObject<HTMLDivElement>;
}

export { LMNotificationProps, LMNotificationPropsPlus };
