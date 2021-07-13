import React, { useEffect, useState } from "react";
import { Subject } from "rxjs";
import { LMNotificationProps, LMNotificationPropsPlus } from "./types";
import styles from "./styles.module.scss";
import { closeIconLM } from "../LMIcons";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const subjectNotificationLM: Subject<LMNotificationPropsPlus> = new Subject();

export function sendNotificationLM(notification: LMNotificationProps): void {
  subjectNotificationLM.next({
    ...notification,
    key: Date.now(),
    ref: React.createRef(),
  });
}

const LMNotification: React.FC = () => {
  const { t } = useTranslation("notification");
  const [notificationList, _setNotificationList] = useState<
    LMNotificationPropsPlus[]
  >([]);
  const notificationListRef = React.useRef(notificationList);
  const setNotificationList = (data: LMNotificationPropsPlus[]) => {
    notificationListRef.current = data;
    _setNotificationList(data);
  };

  const [closeSelected, setCloseSelected] = useState<number>();

  const nextFunc = (notification: LMNotificationPropsPlus) => {
    notification.ref?.current?.addEventListener("animationend", (e) => {
      console.log(e);
    });
    setNotificationList([...notificationListRef.current, notification]);
  };

  useEffect(() => {
    const subscription = subjectNotificationLM.subscribe({
      next: nextFunc,
      error: () => console.log("error"),
      complete: () => console.log("error"),
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  
  useEffect(() => {
    if (closeSelected)
      setNotificationList(
        notificationList.filter((ele) => ele.key !== closeSelected)
      );
    setCloseSelected(undefined);
  }, [closeSelected]);


  return (
    <div className={styles.cont}>
      {notificationList.map((noti) => (
        <div
          key={noti.key}
          ref={noti.ref}
          className={classNames(
            styles.notification,
            closeSelected === noti.key ? styles.disapear : styles.reveal
          )}
        >
          <div
            className={styles.close}
            onClick={() => setCloseSelected(noti.key)}
          >
            {closeIconLM}
          </div>
          <div className={styles.body}>
            <span className={styles.icon}>{noti.icon}</span>
            <span className={styles.msg}>
              {t(noti.msg)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LMNotification;
